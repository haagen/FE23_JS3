import React from 'react';

class ComplexClassComponent extends React.Component {

    state = { };

    // startNumber -- innehåller vårt startnummer
    constructor(props) {
        super(props);
        this.state = {
            counter: props.startNumber || 0
        }
        this.addOne = this.addOne.bind(this);
    }

    addOne() {
        this.setState(
            {
                counter: this.state.counter + 1
            }
        );
    }

    render() {
        return (
            <>
                <button onClick={ this.addOne }>{ this.state.counter }</button>
            </>
        );
    }

}

export default ComplexClassComponent;