import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElements = props.postsData.map(post =>
        <Post id={post.id} message={post.message} likesCount={post.likesCount} userPhoto={post.userPhoto}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.wrapper}>
            <textarea name="postInput" id="postInput" cols="80" rows="3"
                      placeholder='input text' ref={newPostElement}
                      value={props.newPostText} onChange={onPostChange}
            />
            <button onClick={() => {
                addPost()
            }}>Add post
            </button>
            <h3>My posts</h3>
            {postsElements}
        </div>
    )
}

export default MyPosts;
