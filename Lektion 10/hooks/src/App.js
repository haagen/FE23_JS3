import logo from './logo.svg';
import './App.css';
import State from './state';
import Effect from './effect';
import Reducer from './reducer';

function App() {
  return (
    <div>
      <State maxNumber={ 1000 } />
      <br />
      <Effect />
      <br />
      <Reducer />
    </div>
  );
}

export default App;
