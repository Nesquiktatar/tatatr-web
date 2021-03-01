import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import userPhoto from '../../assets/user.svg';
import Friends from "./Friends/Friends";

const Profile = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.item}>
                <img src={userPhoto} alt="userPhoto"/>
            </div>
            <div className={s.item}>
                userInfo
            </div>
            <div className={s.item}>
                <Friends friendsData={props.profilePage.friendsData}/>
            </div>
            <div className={s.myPosts}>
                <MyPosts postsData={props.profilePage.postsData}/>
            </div>

        </div>
    )
}

export default Profile;