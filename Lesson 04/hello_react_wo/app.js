"use strict";

class HelloReactWOToolBelt extends React.Component {

    state = {};

    constructor(props) {
        super(props);
        this.state.props = props;
        console.log("Props", props);
        console.log("State", this.state);
    }
    
    // returnera ett react element
    render() {
        
        // type (= vilken komponent), props (= attribut/egenskaper),
        // children
        //return React.createElement("h1", null, "Hello " + this.state.props.greeting);

        return React.createElement(
            "div", 
            { className: "bold" }, 
            React.createElement(
                "h1", 
                null, 
                "Hello " + this.state.props.greeting
            )
        );
    }
}

const root = document.getElementById("root");
ReactDOM.render(
    React.createElement(HelloReactWOToolBelt, { greeting: "react.js" }, null),
    root
);
