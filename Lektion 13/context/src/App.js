import logo from './logo.svg';
import './App.css';
import PrefsProvider from './providers/PrefsProvider';
import SubscriberClassComponent from './SubscriberComponent';
import SubscriberFunctionComponent from './SubscriberFunctionComponent';

function App() {
  return (
    <PrefsProvider>
      
      <SubscriberClassComponent />
      <br /><hr /><br />
      <SubscriberFunctionComponent />

    </PrefsProvider>
  );
}

export default App;
