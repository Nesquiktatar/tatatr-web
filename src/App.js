import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Faq from "./components/Faq/Faq";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Navbar/>
                <Route path='/dialogs' render={ () => <Dialogs dialogsNavbarData={props.dialogsNavbarData}/>}/>
                <Route path='/profile' render={ () => <Profile postsData={props.postsData}/>}/>
                <Route path='/faq' render={ () => <Faq/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
