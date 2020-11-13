import React from 'react';
import s from './FriendInfo.module.css'

const FriendInfo = (props) => 
{
    let FriendInfo = props.friendInfo.map(fi => (<div><img src={fi.profileImage} className = {s.userImg}/><div class = {s.userNames}> {fi.name} </div></div> ));

    return (
        <div className = {s.friends}>
            {FriendInfo}
        </div>
    );
}

export default FriendInfo;