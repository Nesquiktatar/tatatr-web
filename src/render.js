import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost} from '../src/redux/state'
import {addMessage, updateNewMessageText, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state) => {
        ReactDOM.render(
            <React.StrictMode>
                <App state={state} addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     updateNewMessageText={updateNewMessageText}
                     addMessage={addMessage}
                />
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

