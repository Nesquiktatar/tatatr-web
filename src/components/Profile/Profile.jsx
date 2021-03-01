import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import userPhoto from '../../assets/user.svg';

const Profile = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.item}>
                <img src={userPhoto} alt="userPhoto" />
            </div>
            <div className={s.item}>userInfo</div>
            <div className={s.myPosts}>
                <MyPosts postsData={props.postsData} />
            </div>

        </div>
    )
}

export default Profile;