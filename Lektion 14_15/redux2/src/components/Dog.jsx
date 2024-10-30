import { useSelector, useDispatch } from "react-redux";
import { getImgUrl, getNewDogImage, loadDogBreeds, getBreeds } from "../redux/dogSlice";
import { useEffect, useState } from "react";

function Dog() {

    const [ refresh, setRefresh ] = useState(false);
    const [ breed, setBreed ] = useState('');
    
    const imgUrl = useSelector(getImgUrl);
    const breeds = useSelector(getBreeds);


    const dispatch = useDispatch();

    useEffect(() => {

        let intId = undefined;

        if(refresh) {
            intId = setInterval(() => {
                dispatch(getNewDogImage(breed));
            }, 10*1000);
        }

        return () => {
            if(intId != undefined) {
                clearInterval(intId);
            }
        }

    }, [refresh, breed]);

    useEffect(() => {
        dispatch(loadDogBreeds());
    }, []);

    return(
        <>
            <div style={ { width: '25%', margin: '0 auto' }  }>
            { imgUrl ? <img src={ imgUrl } alt="En bild på en hund" style={ { width: '100%' }}></img> : "Det finns ingen bild!"  }
            </div>
            <br />
            <button onClick={ (e) => { dispatch(getNewDogImage(breed)); } }>Ny Bild</button>
            <button onClick={ (e) => { setRefresh(!refresh); } }>{
                refresh ? "Stäng av automatisk laddning" : "Sätt på automatisk laddning"
            }
            </button>
            <select id="dogBreed" value={ breed } onChange={ (e) => { setBreed(e.target.value); } }>
                <option value="">Välj ras</option>
                {
                    breeds.map((e, i) => {
                        return <option value={ e } key={ i }>{ e }</option>
                    })
                }
            </select>
        </>
    );
}

export default Dog;