import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logIn, logOut, setUserData, toggleIsFetching} from "../../redux/auth-reducer";
import {authMe} from "../../redux/auth-reducer"
import {compose} from "redux";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Header {...this.props}/>
    }

    componentDidMount() {
        this.props.authMe();
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isFetching: state.auth.isFetching,
        isAuthorized: state.auth.isAuthorized
    }
}
export default compose(
    connect(mapStateToProps,
        {
            toggleIsFetching,
            setUserData,
            logIn,
            logOut,
            authMe
        })
)(HeaderContainer);