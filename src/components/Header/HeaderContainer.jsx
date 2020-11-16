import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logIn, logOut, setUserData, toggleIsFetching} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api"

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Header {...this.props}/>
    }

    componentDidMount() {
       authAPI.authMe()
            .then(data => {
                    if (data.resultCode === 0) {
                        let {id, login, email} = data.data;
                        this.props.setUserData(id, email, login);
                    }
                }
            );
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isFetching: state.auth.isFetching,
        isAuthorized: state.auth.isAuthorized
    }
}

export default connect(mapStateToProps,
    {
        toggleIsFetching,
        setUserData,
        logIn,
        logOut
    })(HeaderContainer);