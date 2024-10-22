import React from 'react';
import PrefsContext from './context/PrefsContext';

class SubscriberClassComponent extends React.Component {

    // static contextType = PrefsContext;

    // render() {
        
    //     return (
    //         <>
    //             Your language preference is { this.context.language }.<br />
    //             Your timezone is { this.context.timezone }.<br />  
    //         </>
    //     );
    // }

    render() {
        return (
            <PrefsContext.Consumer>

                { 
                    userPref => {
                        return(
                            <>
                            Your language preference is { userPref.language }.<br />
                            Your timezone is { userPref.timezone }.<br />
                            <button onClick={ (e) => { userPref.setLanguage('Danish'); }  }>Mitt favoritspråk är Danska</button>                  
                            </>
                        );
                    }
                }
            </PrefsContext.Consumer>
        );
    }

}

export default SubscriberClassComponent;