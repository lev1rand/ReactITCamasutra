import Axios from 'axios';
import React from 'react';
import Profile from './Profile'
import * as axios from 'axios'
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer';
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component {


    render() {

        return (
            <Profile {...this.props} profile={this.props.userProfile}/>);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }
}

let mapStateToProps = (state) => ({userProfile: state.profilePage.userProfile})
let WithRouteProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithRouteProfileContainer);