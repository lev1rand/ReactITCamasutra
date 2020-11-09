import React from 'react';
import s from './Message.module.css'
const Message = (props) => {
    return (
        <div className>
            <img src={props.avatar} className = {s.messageImg}/>
            {props.message}

        </div>
    );
}

export default Message;