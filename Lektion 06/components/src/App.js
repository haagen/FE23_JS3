import logo from './logo.svg';
import './App.css';
import SimpleClassComponent from './components/SimpleClassComponent';
import ComplexClassComponent from './components/ComplexClassComponent';

function App() {
  return (
    <div className="App">
      <SimpleClassComponent name="Tyson" /><br />
      <ComplexClassComponent startNumber={ 1337 } />
    </div>
  );
}

export default App;
