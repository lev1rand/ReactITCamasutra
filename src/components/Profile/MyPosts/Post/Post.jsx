import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://www.treehugger.com/thmb/wtEZ-8nEq-BbxL8jC8eH5eDS0bo=/2070x2070/smart/filters:no_upscale()/piglet-grass-dandelions-01-b21d7ef8f881496f8346dbe01859537e.jpg" />
        {props.message}
          <div>
             <span>{props.likesCount} likes</span>
          </div>
     
    </div>
  );
}

export default Post;