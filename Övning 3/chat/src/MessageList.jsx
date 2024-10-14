
import './MessageList.css';

export default function MessageList(props){

    // props.messages => [ { user, text }]

    return (
        <div className="messageList">
            <h2>Chat-history</h2>
            <ul>
                {
                    props.messages.map(
                        (element, index) => {
                            return <li key={index}>{ element.user }: {element.text}</li>
                        }
                    )
                }
            </ul>
        </div> 
    );

}
