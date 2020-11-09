import React from 'react';
import FriendInfo from './FriendInfo/FriendInfo';
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className = {s.title}>
            Friends
            <FriendInfo friendInfo= {props.friendInfo} />
        </div>
    );
}

export default Friends;