import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import userPhoto from "../../../assets/user.svg";

const MyPosts = (props) => {


    let postsElements = props.postsData.map(post =>
        <Post id={post.id} message={post.message} likesCount={post.likesCount} userPhoto={post.userPhoto}/>)

    return (
        <div className={s.wrapper}>
            <textarea name="postInput" id="postInput" cols="80" rows="3" placeholder='input text'/>
            <button>Add post</button>
            <h3>My posts</h3>
            {postsElements}
        </div>
    )
}

export default MyPosts;
