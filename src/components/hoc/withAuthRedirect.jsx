import React from "react"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuthorized
    }
}
export const withAuthRedirect = (Component) => {
    class RedirectedComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to = '/login'/>
            }
            return (
                <Component {...this.props}/>);
        }
    }

    let ConnectedRedirectedComponent = connect(mapStateToPropsForRedirect)(RedirectedComponent);

    return ConnectedRedirectedComponent;
}