import React from 'react';
import s from './Post.module.css';
import LikeButton from "./LikeButton/LikeButton";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={props.userPhoto} alt="userPhoto"/>
            <div className={s.message}>
                {props.message}
            </div>
            <div className={s.like}>
                <LikeButton/>{props.likesCount}
            </div>
        </div>
    )
}

export default Post;