import { connect } from 'react-redux';
import {sendMessageCreator } from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs"
import {withAuthRedirect} from "../common/HOCs/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => { dispatch(sendMessageCreator(newMessageBody)); }
    }
}

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);