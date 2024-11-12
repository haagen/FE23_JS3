"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const About = () => {

    const [ counter, setCounter ] = useState<number>(0);
    const router = useRouter();

    useEffect(() => {

        const intervalId = setInterval(
            () => {
                 setCounter( c => c + 1);
                 if (counter === 5) {
                    // Redirecta till /blog/?namn=timeout
                    router.push("/blog/?namn=Timeout");
                }
            },
            3500
        );

        return () => {
            clearInterval(intervalId);
        }

    }, [ counter ]);

    const onClick = () => {
            // Redirecta till /blog/?namn=timeout
            router.push("/blog/?namn=Timeout");
    }

    return (
        <>
            <h1>About Us</h1>
            <p>This is my first Next.JS component.</p>
            <p>Counter: { counter } </p>
            <p>
                <button onClick={ onClick }>Läs mer på vår blogg</button>
            </p>
        </>
    );

}

export default About;