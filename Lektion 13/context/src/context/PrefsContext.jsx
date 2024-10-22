import React from 'react';

const originalValues = {
    language: 'English',
    timezone: 'CST+1',
    setLanguage: undefined,
    setTimezone: undefined
};

const PrefsContext = React.createContext(originalValues);

export default PrefsContext;