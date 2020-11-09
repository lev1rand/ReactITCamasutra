import React, { useCallback } from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
  let PostsElements = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount} />))

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    props.updateNewPostText(newPostElement.current.value);
  }

  let newPostElement = React.createRef();

  return (<div className={s.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>

    <div className={s.posts}>
      {PostsElements}
    </div>
  </div>);
}

export default MyPosts;