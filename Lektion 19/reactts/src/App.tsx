import './App.css';
import { Counter } from './components/counter';
import Profile from './components/profile';
import YasirsReducer from './components/yasirsReducer';
import LanguageContext from './context/languageContext';
import { Language, LanguageContextObject } from './types';
import { useState } from 'react';

function App() {

  const [ lang, setLang ] = useState<Language>("Danish");
  const myProviderValue:LanguageContextObject = {
    language: lang, 
    setLanguage: setLang
  }


  return (
    <LanguageContext.Provider value={ myProviderValue }>
      <div>
        <Counter initValue={ 100 } label='Räknare'/>
        <hr />
        <YasirsReducer />
        <hr />
        <Profile />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
