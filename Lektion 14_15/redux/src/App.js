
import './App.css';
import ClassicCounter from './ClassicCounter';
import ReduxCounter from './ReduxCounter';
import ReduxSetLanguge from './ReduxSetLanguage';
import ReduxShowPreferences from './ReduxShowPreferences';

function App() {
  return (
    <div className="App">
      <ClassicCounter />
      <hr />
      <ReduxCounter />
      <hr />
      <ReduxShowPreferences />
      <hr />
      <ReduxSetLanguge />
    </div>
  );
}

export default App;
