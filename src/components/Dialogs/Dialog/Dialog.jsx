import React from 'react';
import s from './Dialog.module.css';
import LeftBox from "./LeftBox/LeftBox";
import RightBox from "./RightBox/RightBox";

const Dialog = (props) => {

    let incomingMessages = props.incoming.map (
        m => <LeftBox id={m.id} message={m.message}/>
    )
    let outgoingMessages = props.outgoing.map (
        m => <RightBox id={m.id} message={m.message}/>
    )

    return(
        <div className={s.wrapper}>
            <div className={s.left}>{incomingMessages}</div>
            <div className={s.right}>{outgoingMessages}</div>
        </div>
    )
}

export default Dialog;