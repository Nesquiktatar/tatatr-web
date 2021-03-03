import React from 'react';
import s from './Friends.module.css';
import FriendsElement from "./FriendElement/FriendsElement";

const Friends = (props) => {
    let friendsElements = props.friendsData.map(
        friend => <FriendsElement id={friend.id} name={friend.name} userPhoto={friend.userPhoto}/>
    )

    return(
        <div className={s.wrapper}>
            Friends :
            {friendsElements}
        </div>
    )
}

export default Friends;