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

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header></Header>
      <Navbar></Navbar>
      <div className='app-wrapper-content'>
        <Route exact path='/dialogs' render={() => <DialogsContainer/>} />
        <Route exact path='/profile' render={() => <Profile/>} />
        <Route exact path='/music' render={() => <Music />} />
        <Route exact path='/settings' render={() => <Settings />} />
        <Route exact path='/news' render={() => <News />} />
        <Route exact path='/users' render={() => <UsersContainer/>} />
      </div>
    </div>
  )
}

export default App;
