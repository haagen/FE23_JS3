import styles from './ListTodoTable.module.css';


// props.todos[]
export default function(props) {

    const onEditClick = (e) => {
        e.preventDefault();
        props.onEdit(JSON.parse(e.target.dataset.object));
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Titel</th>
                        <th>Beskrivning</th>
                        <th>Verktyg</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.todos.map((t) => {
                        return (
                            <tr key={t.id}>
                                <td>{ t.title }</td>
                                <td>{ t.description }</td>
                                <td>
                                    {/* <input type="button" value="Redigera" onClick={ onEditClick } data-object={ JSON.stringify(t) } /> */}
                                    <input type="button" value="🖉" onClick={ e => props.onEdit(t) } />
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>        
        </>
    )
};