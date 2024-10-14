import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MessageList from './MessageList';
import ChatBox from './ChatBox';

function App() {

  const [ state, setState ] = useState([]);

  const addMessage = (user, message) => {

    const newState = [ ...state ];
    newState.push({
      user: user, 
      text: message
    });
    setState(newState);

  }

  return (
    <div className="app">

      <ChatBox name="Användare 1" onMessage={ addMessage } />
      <MessageList messages={ state } />
      <ChatBox name="Användare 2" onMessage={ addMessage } />

    </div>
  );
}

export default App;
