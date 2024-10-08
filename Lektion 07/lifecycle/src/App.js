import logo from './logo.svg';
import './App.css';
import StaticExample from './staticExample';
import LifeCycleComponent from './LifeCycleCompnent';
import LifeCycleFunction from './LifeCycleFunction';
import EventComponent from './EventComponent';

function App() {
  return (
    <>
      <StaticExample />
      {/* <LifeCycleComponent></LifeCycleComponent> */}
      <LifeCycleFunction></LifeCycleFunction>
      <EventComponent />
    </>
  );
}

export default App;
