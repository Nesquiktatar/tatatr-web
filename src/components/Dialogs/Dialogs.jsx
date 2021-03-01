import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import DialogsNavbar from "./DialogsNavbar/DialogsNavbar";


const Dialogs = (props) => {

    let dialogsNavbarElements = props.dialogsNavbarData.map(dialog =>
        <DialogsNavbar id={dialog.id} name={dialog.name} userPhoto={dialog.photo}/>)


    return (
        <div className={s.wrapper}>
            <div className={s.iconsWrapper}>
                <button>prev</button>
                {dialogsNavbarElements}
                <button>next</button>
            </div>
            <Dialog
                dialogsMessagesIncomingData={props.dialogsMessagesIncomingData}
                dialogsMessagesOutgoingData={props.dialogsMessagesOutgoingData}
            />
            <textarea name="dialogsInput" id="dialogsInput" cols="30" rows="15"
                      placeholder='enter your message'/>
            <button>SEND</button>
        </div>
    )
}

export default Dialogs;