import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Faq from "./components/Faq/Faq";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Helper from "./components/Helper/Helper";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Navbar/>
                <Route path='/dialogs' render={ () =>
                    <Dialogs dialogsPage={props.state.dialogsPage}
                             dispatch={props.dispatch}
                    />}/>
                <Route path='/profile' render={ () =>
                    <Profile profilePage={props.state.profilePage}
                             dispatch={props.dispatch}
                    />}/>
                <Route path='/faq' render={ () => <Faq/>}/>
                <Route path='/helper' render={ () => <Helper/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
