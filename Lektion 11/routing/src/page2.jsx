import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Page2(props) {

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("/");
        }, 10*1000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            <h1>Detta är sida 2</h1> 

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod magnam praesentium. { params.id }</p>

            { params.id && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eaque unde numquam iusto natus? Nemo voluptates ratione ex voluptas laudantium, labore deserunt officiis sunt doloribus tempore maxime veniam quibusdam adipisci! Explicabo tempore quidem error numquam?</p> }

        </>
    );
}