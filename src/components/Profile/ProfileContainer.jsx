import Axios from 'axios';
import React from 'react';
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {
    render() {

        return (
            <Profile {...this.props} profile = {this.props.userProfile}/>);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }
}

let mapStateToProps = (state)=>({     userProfile: state.profilePage.userProfile  })

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);