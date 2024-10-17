import { useState } from 'react';
import { useEffect } from 'react';
import styles from './EditTodo.module.css';

export default function EditTodo(props) {

    const [ formData, setFormData ] = useState({ title: '', description: '' });
    const [ showErrors, setShowErrors ] = useState({ title: false, description: false });

    /*
        Effect som uppdaterar intern state när
        props förändras.
    */
    useEffect(()=>{
            if(props.editTodo) {
                setFormData(
                    props.editTodo
                );
            }
        },
        [props]
    );

    /*
        Callbacks / Event-handlers
    */

    // Formdata - title
    const onTitleInput = (e) => {
        setShowErrors({ ...showErrors,
            title: false
        })
        setFormData({ ...formData, title: e.target.value });
    }

    // Formdata - description
    const onDescriptionInput = (e) => {
        setFormData( { ...formData, description: e.target.value } );
    }
    
    // Knapptryckning - spara
    const onSaveBtnClick = (e) => {
        e.preventDefault();
        if(formData.title) {
            props.onSave(formData);
            setFormData({
                title: '',
                description: ''
            });
        } else {
            setShowErrors({ ...showErrors,
                            title: true
             });
        }
    }

    // Knapptryckning - avbryt
    const onCancleBtnClick = (e) => {
        e.preventDefault();
        setFormData({
            title: '',
            description: ''
        });
    }

    return (
        <div className={ styles.editBox }>
            <label htmlFor="title">Titel:</label>
            <input id="title" name="title" value={ formData.title } onChange={ onTitleInput } />
            { showErrors.title && <p>Du måste fylla i en titel</p> } 
            <label htmlFor="description">Beskrivning:</label>
            <textarea id="description" rows="5" name="description" value={ formData.description } onChange={ onDescriptionInput } />
            <button onClick={ onSaveBtnClick }>Spara</button>
            { (formData.title || formData.description) && <button onClick={ onCancleBtnClick }>Avbryt</button> }
        </div>
    );
}