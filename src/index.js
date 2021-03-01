import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import userPhoto from "./assets/user.svg";

let dialogsNavbarData = [
    {id: 1, name: 'John', photo: userPhoto},
    {id: 2, name: 'Mikle', photo: userPhoto},
    {id: 3, name: 'Ketty', photo: userPhoto},
    {id: 4, name: 'Ragnar', photo: userPhoto},
    {id: 5, name: 'Fibby', photo: userPhoto}
]

let postsData = [
    {id: 1, message: 'First post', likesCount: '1', userPhoto: userPhoto},
    {id: 2, message: 'Second post', likesCount: '22', userPhoto: userPhoto},
    {id: 3, message: 'Third post', likesCount: '33', userPhoto: userPhoto},
    {id: 4, message: '4 post', likesCount: '44', userPhoto: userPhoto}
]

let dialogsMessagesIncomingData = [
    {id:1, message:'Hello!'},
    {id:2, message:'How are you?!'},
    {id:3, message:'You should saw that movie dude!'}
]

let dialogsMessagesOutgoingData = [
    {id:1, message:'Wazzzup!'},
    {id:2, message:'Cool. What about you?'},
    {id:3, message:'Okay, I will do it!'}
]


ReactDOM.render(
    <React.StrictMode>
        <App dialogsNavbarData={dialogsNavbarData}
            postsData={postsData}
             dialogsMessagesIncomingData={dialogsMessagesIncomingData}
             dialogsMessagesOutgoingData={dialogsMessagesOutgoingData}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
