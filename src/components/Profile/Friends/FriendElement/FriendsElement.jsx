import React from 'react';
import s from './FriendsElement.module.css';

const FriendsElement = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.item}>
                <img src={props.userPhoto} alt="userPhoto"/>
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default FriendsElement;