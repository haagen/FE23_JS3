import { useRef } from 'react';

export default function Refs(props) {

    const textFieldRef = useRef(null);

    const onButtonClick = () => {
        textFieldRef.current.focus();
        alert('Mitt värde är: ' + textFieldRef.current.value);
    };

    return (
        <>
            <h2>Experiment med Refs</h2>
            <label htmlFor="phone">Telefon</label>
            <input type="text" name="phone" id="phone" ref={ textFieldRef } />
            <button onClick={ onButtonClick }>Tryck på mig!</button>
        </>
    );

}