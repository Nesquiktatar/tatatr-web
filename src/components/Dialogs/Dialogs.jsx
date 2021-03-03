import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import DialogsNavbar from "./DialogsNavbar/DialogsNavbar";

const Dialogs = (props) => {

    let dialogsNavbarElements = props.dialogsPage.dialogsNavbarData.map(dialog =>
        <DialogsNavbar id={dialog.id} name={dialog.name} userPhoto={dialog.photo}/>)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.updateNewMessageText(message);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.iconsWrapper}>
                <button>prev</button>
                {dialogsNavbarElements}
                <button>next</button>
            </div>
            <Dialog
                incoming={props.dialogsPage.dialogsMessagesIncomingData}
                outgoing={props.dialogsPage.dialogsMessagesOutgoingData}
            />
            <textarea name="dialogsInput" id="dialogsInput" cols="30" rows="15"
                      placeholder='enter your message' ref={newMessageElement}
                      value={props.dialogsPage.newMessageText} onChange={onMessageChange}
            />
            <button onClick={() => {
                sendMessage()
            }}>SEND
            </button>
        </div>
    )
}

export default Dialogs;