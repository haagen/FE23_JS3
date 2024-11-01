import './App.css';
import { useState } from 'react';


function App() {

  const [ message, setMessage ] = useState("Nothing to see here!")

  const onClick = (e) => {
    setMessage("You, just won a million dollars! WoW!");
  }


  return (
    <div className="App">
      <div aria-live="polite">
        { message }
      </div>
      <button onClick={ onClick }>Play the Game!</button>
    
      <section>
        <h2>Mina Tabbar</h2>
        <ul>
          <li
            role="tab"
            tabIndex="0"
            aria-setsize="3"
            aria-posinset="1"
            
          >
            Tab Ett
          </li>
          <li
            role="tab"
            tabIndex="0"
            aria-setsize="3"
            aria-posinset="2"
          >
            Tab Två
          </li>
          <li
            tabIndex="0"
            role="tab"
            aria-setsize="3"
            aria-posinset="3"
          >
            Tab Tre
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
