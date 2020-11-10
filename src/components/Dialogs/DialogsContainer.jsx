import { connect } from 'react-redux';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs"

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => { dispatch(updateNewMessageBodyCreator(body)); },
        sendMessage: () => { dispatch(sendMessageCreator()); }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;