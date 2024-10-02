import React from 'react';

class SimpleClassComponent extends React.Component {

    render() {
        return (
            <h1>My Simple Class-Component { this.props.name }</h1>
        );
    }

}

export default SimpleClassComponent;