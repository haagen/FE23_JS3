import { useState } from 'react';

export function MyClickComponent(props){

    const onClickHandler = (e) => {
        console.log('In MyClickComponent.onClickHandler()');
        props.click('Här kan vi skicka data"');
    };

    return (
        <>
            <button onClick={ onClickHandler }>{ props.title }</button>  
        </>
    );

}


export default function EventPt2(props){

    const [ counter, setCounter ] = useState(0);

    const callback = (data) => {
        console.log('Vi är i EventPt2.callback()');
        console.log('Data =', data);
        setCounter( cnt => cnt + 1 ); // (cnt) => { return cnt + 1; }
    };

    console.log('EventPt2.counter:', counter);

    return (
        <>
            <h2>My counter: { counter }</h2>
            <MyClickComponent title="Tryck på mig" click={ callback } />
        </>
    );

}