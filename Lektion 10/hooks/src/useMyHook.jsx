import { useState, useEffect, useDebugValue } from 'react'; 

/*
    timeout - timerns intervall i sekunder
    initValue - är start talet i räknaren
*/
function useMyHook(timeout, initValue){

    const [ counter, setCounter ] = useState(initValue);
    useDebugValue(counter);

    useEffect(
        () => {
            let interval = setInterval(
                () => {
                    setCounter( c => c + 1);
                },  
                timeout*1000
            );
            return () => {
                clearInterval(interval);
            }
        },
        []
    );


    return [ counter ];
}

export default useMyHook; 