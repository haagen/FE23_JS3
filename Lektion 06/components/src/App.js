import logo from './logo.svg';
import './App.css';
import SimpleClassComponent from './components/SimpleClassComponent';
import ComplexClassComponent from './components/ComplexClassComponent';
import DanskSkola from './components/DanskSkola';
import SimpleFunctionComponent from './components/SimpleFunctionComponent';
import ComplexFunctionComponent from './components/ComplexFunctionComponent';

function App() {
  return (
    <div className="App">
      <SimpleClassComponent name="Tyson" /><br />
      <ComplexClassComponent startNumber={ 1337 } /><br />
      <DanskSkola />
      <SimpleFunctionComponent name="Charlie" /><br />
      <ComplexFunctionComponent startNumber={ 7331 } /><br />
    </div>
  );
}

export default App;
