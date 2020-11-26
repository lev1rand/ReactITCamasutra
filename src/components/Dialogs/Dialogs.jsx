import React from 'react';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Login from "../common/Auth/Login";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormControl";
import {maxLengthCreator, required} from "../../utils/validators";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => (
        <DialogItem id={dialog.id} name={dialog.name}></DialogItem>));
    let messagesElements = props.dialogsPage.messages.map(m => (
        <Message message={m.message} avatar={m.avatar}></Message>));

    let sendMessage = (messageData) => {
        props.sendMessage(messageData.newMessageBody);
    }
    let maxLength10 = maxLengthCreator(10);
    const AddMessageForm = (props) => {

        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={TextArea}
                           name={"newMessageBody"}
                           placeholder={"Enter your message"}
                           validate={[required, maxLength10]}
                    />
                </div>
                <div>
                    <button>Send Message</button>
                </div>
            </form>
        )
    }
    const AddMessageFormRedux = reduxForm({
        form: 'dialogAddMessageForm'
    })(AddMessageForm);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={sendMessage}/>
            </div>
        </div>
    );

}


export default Dialogs;

