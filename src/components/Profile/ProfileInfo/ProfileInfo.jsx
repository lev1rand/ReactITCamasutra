import React from 'react';
import Preloader from '../../common/Preloader';
import s from "./ProfileInfo.module.css";
import preloaderImg from '../../../assets/images/preloader.gif';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader loadImage={preloaderImg}/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.userPic} src={props.profile.photos.large}/>
                <ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
            </div>
        </div>);
}

export default ProfileInfo;