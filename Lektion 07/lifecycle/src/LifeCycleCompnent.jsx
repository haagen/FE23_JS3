import React from "react";

class LifeCycleComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log('Vi är i konstruktorn!')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Vi är i getDerivedStateFromProps');
        return state; 
    }

    render() {
        return (
            <>
                <h1>Hello FE23</h1>
            </>
        );
    }

    componentDidMount() {
        console.log('Vi är i componentDidMount');
    }

}

export default LifeCycleComponent;