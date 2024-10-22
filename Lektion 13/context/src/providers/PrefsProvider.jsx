import { useState } from 'react';
import PrefsContext from '../context/PrefsContext';

const PrefsProvider = ({ children }) => {

    const [ lang, setLang ] = useState('Swedish');
    const [ tz, setTz ] = useState('CST+1');
 
    const providerValues = {
        language: lang,
        timezone: tz,
        setLanguage: setLang,
        setTimezone: setTz
    };

    return (
        <PrefsContext.Provider value={ providerValues }>
            { children }
        </PrefsContext.Provider>
    );
}

export default PrefsProvider;
