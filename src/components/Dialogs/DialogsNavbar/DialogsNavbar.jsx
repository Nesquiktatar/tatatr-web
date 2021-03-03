import React from 'react';
import s from './DialogsNavbar.module.css';
import {NavLink} from "react-router-dom";

const DialogsNavbar = (props) => {
    return(
        <div>
            <NavLink to={'/dialogs/' + props.id}>
                <img src={props.userPhoto} alt="userPhoto" className={s.userPhoto}/>
                <div className={s.underText}>{props.name}</div>
            </NavLink>
        </div>
    )
}

export default DialogsNavbar;