import { useSelector } from "react-redux";
import { selectLanguage, selectTimezone } from "./preferenceReducer";

export default function ReduxShowPreferences(){

    const language = useSelector(selectLanguage);
    const timezone = useSelector(selectTimezone);

    return (
        <>
            <h2>My Preferences</h2>
            <dl>
                <dt>Language</dt>
                <dd>{ language }</dd>
                <dt>Timezone</dt>
                <dd>{ timezone }</dd>
            </dl>
        </>
    );

}