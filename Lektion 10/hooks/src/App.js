import logo from './logo.svg';
import './App.css';
import State from './state';
import Effect from './effect';
import Reducer from './reducer';
import CustomHook from './customhook';

function App() {
  return (
    <div>
      <State maxNumber={ 1000 } />
      <br /><hr />
      <Effect />
      <br /><hr />
      <Reducer />
      <br /><hr />
      <CustomHook />
    </div>
  );
}

export default App;
