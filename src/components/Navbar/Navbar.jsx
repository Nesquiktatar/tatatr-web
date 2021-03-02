import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.item}>Main</div>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/helper' activeClassName={s.active}>Helper</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/faq' activeClassName={s.active}>FAQ</NavLink>
            </div>
        </div>
    )
}

export default Navbar;