import React from 'react';
import Preloader from '../../common/Preloader';
import s from "./ProfileInfo.module.css";
import preloaderImg from '../../../assets/images/preloader.gif';

const ProfileInfo = (props) => {

if(!props.profile){

  return <Preloader loadImage={preloaderImg}/>
}

  return (
    <div>
      <div className={s.descriptionBlock}>
           <img className = {s.userPic} src = {props.profile.photos.large}/>

      </div>
    </div>);
}

export default ProfileInfo;