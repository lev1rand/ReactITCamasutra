import React from 'react';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    let DialogElements = props.state.dialogs.map(dialog => (<DialogItem id={dialog.id} name={dialog.name}></DialogItem>));
    let MessagesElements = props.state.messages.map(m => (<Message message={m.message} avatar={m.avatar}></Message>));

    let newMessageElement = React.createRef();
    const sendMessage = () => {
        alert(newMessageElement.current.value);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogElements}
            </div>

            <div className={s.messages}>
                {MessagesElements}
            </div>

            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick = {sendMessage}>Send Message</button>
            </div>
        </div>
    );
}

export default Dialogs;