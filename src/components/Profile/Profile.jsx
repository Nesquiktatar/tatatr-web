import React from 'react';
import s from './Profile.module.css';
import userPhoto from '../../assets/user.svg';
import Friends from "./Friends/Friends";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Profile = (props) => {
    let state=props.store.getState().profilePage;

    return (
        <div className={s.wrapper}>
            <div className={s.item}>
                <img src={userPhoto} alt="userPhoto"/>
            </div>
            <div className={s.item}>
                userInfo
            </div>
            <div className={s.item}>
                <Friends friendsData={state.friendsData}/>
            </div>
            <div className={s.myPosts}>
                <MyPostsContainer state={state}
                                  store={props.store}
                    />
            </div>

        </div>
    )
}

export default Profile;