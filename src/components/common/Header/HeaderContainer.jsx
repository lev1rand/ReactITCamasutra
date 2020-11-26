import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logIn, logOut, setUserData, toggleIsFetching} from "../../../redux/reducers/auth-reducer";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuthorized: state.auth.isAuthorized
    }
}
export default compose(
    connect(mapStateToProps,
        {
            logOut
        })
)(HeaderContainer);