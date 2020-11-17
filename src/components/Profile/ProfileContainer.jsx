import React from 'react';
import Profile from './Profile'
import {connect} from 'react-redux';
import {setUserProfile, getProfile, setStatus, updateStatus, getStatus} from '../../redux/profileReducer';
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    render() {
        return (
            <Profile {...this.props} profile={this.props.userProfile}/>);
    }

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
        this.props.getStatus(this.props.match.params.userId);
    }
}

let mapStateToProps = (state) => (
    {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status
    })


export default compose(
    withRouter,
    connect(mapStateToProps, {setUserProfile, getProfile, setStatus, getStatus, updateStatus})
)(ProfileContainer);