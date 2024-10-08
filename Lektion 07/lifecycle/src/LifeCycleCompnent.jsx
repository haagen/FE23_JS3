import React from "react";

class LifeCycleComponent extends React.Component {

    /* Livscykelevent för Create */

    constructor(props) {
        super(props);
        console.log('Vi är i konstruktorn!')
        this.state = {
            counter: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Vi är i getDerivedStateFromProps');
        console.log('My state counter is: ', state.counter);
        return state; 
    }
    // onClickHandler() { } Här behöver vi "bind":a this
    onClickHandler = () => {  // När vi definierar vår funktion som en arrow-funktion behöver vi inte "bind":a this
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {

        // setInterval(() => {
        //     this.onClickHandler();
        // }, 1000);

        return (
            <>
                <h1>Hello FE23</h1>
                <p>Räknaren är nu: { this.state.counter}</p>
                <button onClick={this.onClickHandler}>Räkna upp med ett</button>
            </>
        );
    }

    componentDidMount() {
        console.log('Vi är i componentDidMount');

        setInterval(() => {
            this.onClickHandler();
        }, 1000);        
    }

    /* Livscykelevent för Update */

    shouldComponentUpdate() {
        console.log('Vi är i shouldComponentUpdate');
        if(this.state.counter > 10 && this.state.counter < 15) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log('Vi är i getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('Vi är i componentDidUpdate');
    }

}

export default LifeCycleComponent;