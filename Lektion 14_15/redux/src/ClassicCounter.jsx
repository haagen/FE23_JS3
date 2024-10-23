import { useState } from "react";

export default function ClassicCounter(props) {

    // State: Har sparar vi vår data
    const [ counter, setCounter ] = useState(0);

    // Action: Här "påverkar" vi staten
    const onClick = (e) => {
        setCounter( s => s + 1);
    }

    return (
        <>
            Classic Counter: { counter }<br/>
            <button onClick={ onClick }>+1</button><br />
        </>
    )


}
