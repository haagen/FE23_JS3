import { useState } from "react";

const ComplexFunctionComponent = (props) => {

    const [ counter, setCounter ] = useState(props.startNumber ?? 0);

    const onClick = () => {
        setCounter(counter - 1);
    };

    return (
        <>
            <h2>Räkna knapp v2</h2>
            <button onClick={ onClick }>{ counter }</button>
        </>
    );
};

export default ComplexFunctionComponent;