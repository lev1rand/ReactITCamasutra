import { connect } from 'react-redux';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs"
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => { dispatch(updateNewMessageBodyCreator(body)); },
        sendMessage: () => { dispatch(sendMessageCreator()); }
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);