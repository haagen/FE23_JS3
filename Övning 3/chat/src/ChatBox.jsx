import React from 'react';

class ChatBox extends React.Component {

    state = { message: '' };

    constructor(props) {
        super(props);

        this.onTextAreaChange = this.onTextAreaChange.bind(this);
    }

    onTextAreaChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    onButtonClick = (e) => {
        this.props.onMessage(this.props.name, this.state.message);
        this.setState({
            message: ''
        });        
    }

    render() {

        return (
            <div className="chatBox">
                <h2>{ this.props.name }</h2>
                <label htmlFor="messageBox">Meddelande</label>
                <textarea id="messageBox" name="message" value={ this.state.message} onChange={ this.onTextAreaChange } />
                <button onClick={ this.onButtonClick }>Send Message</button>
            </div>
        );
    }

}

export default ChatBox;
