import { useState } from "react";

export default function EventComponent(props) {

    const [ user, setUser ] = useState({ namn: '' });

    const onButtonClick = (e) => {
        e.preventDefault();
        setUser({
            namn: user.namn,
            greeting: 'Hej, ' + user.namn + ' jag hoppas att allt är bra!'
        });
    }

    const onInputChange = (e) => {
        setUser({
            namn: e.target.value
        });            
    }

    return (
        <>
            <h2>Event-komponenten</h2>
            <form>
                <p>{ user.greeting }</p>
                <label htmlFor="namn">Namn</label><br />
                <input 
                    type="text" 
                    name="namn" 
                    value={ user.namn } 
                    id="namn" 
                    onChange={ onInputChange }
                /><br />
                <button onClick={ onButtonClick }>Säg hej!</button>

            </form>
        </>
    );
};