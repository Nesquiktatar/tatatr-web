import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Faq from "./components/Faq/Faq";
import {BrowserRouter, Route} from "react-router-dom";
import Helper from "./components/Helper/Helper";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Navbar/>
                <div className="content">
                    <Route path='/dialogs' render={ () =>
                        <DialogsContainer store={props.store}
                        />}/>
                    <Route path='/profile' render={ () =>
                        <Profile store={props.store}
                        />}/>
                    <Route path='/faq' render={ () => <Faq/>}/>
                    <Route path='/helper' render={ () => <Helper/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
