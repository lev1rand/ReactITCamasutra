import React, {useCallback} from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {TextArea} from "../../common/FormsControls/FormControl";

const setMaxLength10 = maxLengthCreator(10);
const MyPosts = React.memo(props => {
    console.log("my posts render");
    let PostsElements = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount}/>))
    const addPost = (formAddedPostData) => {
        props.addPost(formAddedPostData.addPostData);
    }
    const AddPostForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={TextArea}
                           placeholder={"Add post"}
                           name={"addPostData"}
                           validate={[required, setMaxLength10]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        );
    }

    const AddPostFormRedux = reduxForm({
        form: "addPost"
    })(AddPostForm);

    let newPostElement = React.createRef();

    return (<div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddPostFormRedux onSubmit={addPost}/>
        <div className={s.posts}>
            {PostsElements}
        </div>
    </div>);
});



export default MyPosts;