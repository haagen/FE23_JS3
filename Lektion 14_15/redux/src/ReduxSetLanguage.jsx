import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from './preferenceReducer';


export default function ReduxSetLanguge(props) {

    const [formState, setFormState] = useState('Swedish');
    const dispatch = useDispatch();

    const onBtnClick = (e) => {
        dispatch(setLanguage(formState));
    }

    return (
        <>
            <label htmlFor="lang">Choose Language</label>
            <select 
                id="lang"
                value={ formState }
                onChange={ (e) => { setFormState(e.target.value) } }
            >
                <option value="Swedish">🇸🇪</option>
                <option value="Danish">🇩🇰</option>
                <option value="Norwegian">🇳🇴</option>
            </select>
            <button onClick={ onBtnClick }>Save</button>
        </>
    );

}