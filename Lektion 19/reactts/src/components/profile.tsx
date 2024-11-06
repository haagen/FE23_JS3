import LanguageContext from "../context/languageContext";
import { useContext } from "react";

export default function() {

    const contextObject = useContext(LanguageContext);

    return (
        <>
            <h2>Context Example</h2>
            Choosen Language: { contextObject.language }
            <button onClick={ (e) => { 
                /*
                    Innan vi kör contextObject.setLanguage måste vi
                    kontrollera att den är satt (= innehåller en funktion)
                */
                contextObject.setLanguage && 
                contextObject.setLanguage('Norwegian'); 
            } }>
                Set Norwegian
            </button>
        </>
    );
}