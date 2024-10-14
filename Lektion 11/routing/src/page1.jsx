import { Link, useNavigate } from 'react-router-dom';

export default function Page1(props) {

    const navigate = useNavigate();
    const myNumber = Math.floor(Math.random()*100) + 1;

    const onClickHandler = () => {
        navigate("/page2/" + myNumber);
    };

    return (
        <>
            <h1>Detta är sida 1</h1>  
            <Link to="/">Här är en länk för att komma hem</Link><br />
            <Link to="/page2/">Tryck här för att komma till sidan 2</Link><br />
            <button onClick={ onClickHandler }>Till page2 med slumptal</button>
            <Link to={'/page2/' + myNumber }>Till page2 med samma slumptal</Link>
        </>
    );
}