import { useContext } from "react";
import PrefsContext from "./context/PrefsContext";


export default function SubscriberFunctionComponent() {

    const userPref = useContext(PrefsContext);

    const setLang = ( lang => {
        userPref.setLanguage(lang);
    });

    return (
        <>
            <strong>This is a function-component!</strong><br />
            Your language preference is { userPref.language }<br />
            Your timezone is { userPref.timezone }<br />
            <button onClick={ (e) => { setLang('Spanish') } }>🇪🇸</button>
            <button onClick={ (e) => { setLang('Italian') } }>🇮🇹</button>
        </>
    );

}