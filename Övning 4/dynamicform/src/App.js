import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {

  const [ state, setState ] = useState({});

  const nameRef = useRef();
  const emailRef = useRef();


  useEffect(() => {
    nameRef.current.focus();
  }, []);


  const onFormChange = (e) => {
    switch(e.target.name) {
      case 'name':
        setState(state => { return { ...state, name: e.target.value } });
        setState(state => { return { ...state, nameValid: e.target.value.length > 2 }});
        break;
      case 'email':
        setState(state => { return { ...state, email: e.target.value} });
        setState(state => { return { ...state, 
          emailValid: e.target.value.length > 3 && e.target.value.indexOf('@') !== -1
        } });
        break;
      case 'color':
        setState(state => { return { ...state, color: e.target.value } });
        setState(state => { return { ...state, colorValid: e.target.value !== ''}});
        break;
    }
  }; 

  const onKeyDown = (e) => {
    if(e.key !== 'Enter') return;
    switch(e.target.name) {
      case 'name':
        emailRef.current.focus();
        break;
    }
  };

  return (
    <>
      <form onChange={ e => onFormChange(e) } onKeyDown={ e => onKeyDown(e) }>

        <label htmlFor="name">Namn</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={ state.name } 
          ref={ nameRef }
        />

        { state.nameValid && (
            <>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={ state.email } 
                ref={ emailRef }  
              />
            </>
          )
        }
        {
          state.emailValid && (
            <>
              <label htmlFor="color">Favorit färg</label>
              <select name="color" id="color" value={ state.color }>
                <option value=""></option>
                <option value="green">Grön</option>
                <option value="blue">Blå</option>
                <option value="red">Röd</option>
              </select>
            </>
          )
        }


      </form>
    </>
  );
}

export default App;
