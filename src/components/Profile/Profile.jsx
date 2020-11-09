import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo ></ProfileInfo>
      <MyPosts posts = {props.state.posts} addPost = {props.addPost} newPostText = {props.state.newPostText} updateNewPostText = {props.updateNewPostText}></MyPosts>
    </div>);
}

export default Profile;