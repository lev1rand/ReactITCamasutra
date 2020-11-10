import React from 'react';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => (<DialogItem id={dialog.id} name={dialog.name}></DialogItem>));
    let messagesElements = props.dialogsPage.messages.map(m => (<Message message={m.message} avatar={m.avatar}></Message>));

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}

                <div>
                    <div>
                        <textarea value={props.dialogsPage.newMessageBody}
                            placeholder='Enter your message'
                            ref={newMessageElement}
                            onChange={onNewMessageChange}>

                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;