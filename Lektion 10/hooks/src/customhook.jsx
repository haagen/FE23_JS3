import useMyHook from "./useMyHook";

export default function CustomHook(){

    const [ counter ] = useMyHook(5, 123);

    return (
        <div>
            CustomHook Counter: { counter }<br />
        </div>
    );
} 