import { useState, useEffect } from "react";

export default function LifeCycleFunction() {

    console.log('Jag är i LifeCycleFunction()')

    const [ counter, setCounter ] = useState(0);
    
    useEffect(() => {
        const id = setInterval(() => {
            // varför fungerar inte setCounter(counter + 1) ?
            setCounter((cnt) => {  return cnt + 1 });
        }, 1000);
        console.log(id);

        return () => {
            clearInterval(id);
        };
    }, []);    // Använder inget filter [] - altså fungerar useEffect ungefär som componentDidMount() 

    return(
        <>
            <h2>LifeCycleFunction</h2>          
            <p>Vår funktionsräknare är nu: { counter }</p>
            <button onClick={ () => { setCounter( counter + 1) } }>Klicka här</button>  
        </>
    );
}