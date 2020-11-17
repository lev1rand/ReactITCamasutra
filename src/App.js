import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import UsersContainer from './components/User/UsersContainer';
import MusicContainer from './components/Music/MusicContainer';
import NavBarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Auth/Login";

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <NavBarContainer/>
      <div className='app-wrapper-content'>
        <Route exact path='/dialogs' render={() => <DialogsContainer/>} />
        <Route  path='/profile/:userId?' render={() => <ProfileContainer/>} />
        <Route exact path='/music' render={() => <MusicContainer />} />
        <Route exact path='/settings' render={() => <Settings />} />
        <Route exact path='/news' render={() => <News />} />
        <Route exact path='/users' render={() => <UsersContainer/>} />
        <Route path = '/login' render = {()=><Login/>} />
      </div>
    </div>
  )
}

export default App;
