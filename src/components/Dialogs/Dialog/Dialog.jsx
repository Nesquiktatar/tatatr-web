import React from 'react';
import s from './Dialog.module.css';
import LeftBox from "./LeftBox/LeftBox";
import RightBox from "./RightBox/RightBox";

const Dialog = () => {
    return(
        <div className={s.wrapper}>
            <LeftBox message='Hello LEFT! This is a test message to show how to make an arrow on the side of the box.'/>
            <RightBox message='Hello RIGHT! This is a test message to show how to make an arrow on the side of the box.'/>
            <LeftBox message='Hello LEFT! This is a test message to show how to make an arrow on the side of the box.'/>
            <RightBox message='Hello RIGHT! This is a test message to show how to make an arrow on the side of the box.'/>
            <RightBox message='Hello RIGHT! This is a test message to show how to make an arrow on the side of the box.'/>
            <RightBox message='Hello RIGHT! This is a test message to show how to make an arrow on the side of the box.'/>
        </div>
    )
}

export default Dialog;