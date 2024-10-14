import './App.css';
import { useState } from 'react';

function App() {

  const [state, setState] = useState({ 
    formIsValid: true, 
    isMinor: false 
  });

  let validate = (e) => {
    setState({ 
      formIsValid: e.target.value >= 4 && e.target.value <= 75, 
      isMinor: !isNaN(e.target.value) && e.target.value < 18
    });
  }

  return (
  <form>
    <label htmlFor='name'>Namn</label><br />
    <input type="text" name="name"></input><br />
    <label htmlFor='email'>Email</label><br />
    <input type="email" name="email"></input><br/>
    <label htmlFor="age">Ålder</label><br/>
    <input type="number" name="age" onChange={validate}></input><br/>
    { state.isMinor && (
      <>
        <input type="checkbox" name="parentAgree" /> Jag som målsman anmäler mitt barn<br />
      </>
    )}
    <button name="send" onClick={validate}>Skicka</button><br />
    { !state.formIsValid && (<div className='warning'>
      Du måste vara mellan 4 och 75 år för att anmäla dig till denna kursen!
    </div>) }
  </form>
  );
}

export default App;
