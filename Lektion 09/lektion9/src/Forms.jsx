import { useState } from 'react';

export default function Forms(props) {

    const [formValues, setFormValues] = useState({ email: "", tandc: false});
    console.log("formValues", formValues);

    const onCheckBoxClick = (event) => {
 
        setFormValues(
            function(oldState) {
                console.log("oldState", oldState);

                /*

                    let array1 = ['Ett', 'Två'];
                    let array2 = [ ...array1, 'Tre']

                    let obj1 = { attribute1: 'Ett',
                                attribute2: 'Två'};
                    let obj2 = {
                        ...obj1,
                        attribute1: 'Fem'
                    };

                */


                return(
                    { 
                        ...oldState, 
                        tandc: event.target.checked
                    }
                );
                
            }
        );

    };

    const onButtonClick = (event) => {
        setFormValues((o) => {
            return {
                email: o.email,
                tandc: !o.tandc
            }
        });
    }

    return (
        <div>
            <h2>Formulär i React</h2>

            <label htmlFor="uncontrolled">En okontrollerad input</label>
            <input type="text" name="uncontrolled" id="uncontrolled" />

            <label htmlFor="uncontrolled2">En okontrollerad input med ett värde</label>
            <input type="text" name="uncontrolled2" id="uncontrolled2" value="Test"/>

            <h3>
                Registrering av ny användare
            </h3>
            
            <label htmlFor="email">E-postadress</label>
            <input type="text" name="email" id="email" value={ formValues.email } onChange={ (e) =>  setFormValues(oldState => { return { email: e.target.value, tandc: oldState.tandc} }) } />

            <input type="checkbox" name="TandC" id="TandC" checked={ formValues.tandc } onChange={ onCheckBoxClick } />
            <label htmlFor="TandC">Jag accepterar vilkoren</label>
            <input type="button" onClick={ onButtonClick } value="Klicka" />


        </div>
    );
}

