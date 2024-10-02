import React from 'react';

class ComplexClassComponent extends React.Component {

    state = { };

    // startNumber -- innehåller vårt startnummer
    constructor(props) {
        super(props);
        this.state = {
            counter: props.startNumber || 0
        }
        this.addOne = this.addOne.bind(this);  // Behövs ej om man använder pil/arrow-funktion
    }

    addOne() {

        this.setState(
            {
                counter: this.state.counter + 1
            }
        );

        /* 
            Gör inte:
        
            this.state.counter = this.state.count + 1;
            this.state.counter++;

            Man får inte ändra i staten direkt
        */
    }

    /*

    Om man skapar sin metod som en pil/arrow-funktion 
    behöver man _inte_ "binda" this i konstruktorn. 
    
    addOne = () => {
        this.setState(
            {
                counter: this.state.counter + 1
            }
        );
    }
    */

    render() {
        return (
            <>
                <button onClick={ this.addOne }>{ this.state.counter }</button>
            </>
        );
    }

}

export default ComplexClassComponent;