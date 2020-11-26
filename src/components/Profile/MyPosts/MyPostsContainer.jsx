import { connect } from 'react-redux';
import {addPost} from '../../../redux/reducers/profileReducer'
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}


const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);
export default MyPostsContainer;
