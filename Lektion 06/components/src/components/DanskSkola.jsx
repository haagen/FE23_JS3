import React from "react";

/*
 Uttalar man Dansskola slarvigt blir det Dansk Skola!
*/
class DanskSkola extends React.Component {

    state = { };

    constructor(props){
        super(props);
        this.state.visible = false;
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <>
                <h1>Dansk Skola</h1>
                <button onClick={ this.onClick }>
                    { this.state.visible ? <>Dölj</> : <>Visa</> }
                </button><br />
                { this.state.visible && <ContentComponent title="Danska för Svenskar" description="Danska bla bla bla" /> }
            </>
        );
    }
}

/*
 * Content Component kommer att används i DanskSkola för ett
 * block vi kan visa eller inte visa med hjälp av att trycka
 * på en knapp. 
 */
class ContentComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default DanskSkola;