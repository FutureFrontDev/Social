import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Nav";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Nav/>

            <div className='app-wrapper-content '>
                <Dialogs/>
                {/*<Profile />*/}
            </div>

        </div>
    );
};

export default App;
