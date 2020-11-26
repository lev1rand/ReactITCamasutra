import React from 'react';

import {connect} from 'react-redux';
import {
    setUserProfile,
    getProfile,
    setStatus,
    updateStatus,
    getStatus,
    addPost
} from '../../redux/reducers/profileReducer';
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withSuspence} from "../common/HOCs/withSuspense";

const Profile = React.lazy(()=>import ('./Profile'));

class ProfileContainer extends React.Component {
    debugger;
    render() {
        return (
            // <Profile {...this.props} profile={this.props.userProfile}/>
            withSuspence(Profile)
        )
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.userProfile !== this.props.userProfile){
            this.props.setUserProfile(this.props.userProfile);
        }
    }
}


let mapStateToProps = (state) => (
    {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id
    })


export default compose(
    withRouter,
    connect(mapStateToProps, {setUserProfile, getProfile, setStatus, getStatus, updateStatus, addPost}))
    (ProfileContainer);