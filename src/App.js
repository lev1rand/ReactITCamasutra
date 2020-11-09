import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';


const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header></Header>
        <Navbar state = {props.state.navBar}></Navbar>
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route exact path='/profile' render={() => <Profile state={props.state.profilePage} addPost = {props.addPost} updateNewPostText = {props.updateNewPostText}/>}/>
          <Route exact path='/music' render={() => <Music />} />
          <Route exact path='/settings' render={() => <Settings />} />
          <Route exact path='/news' render={() => <News />} />
        </div>
      </div>
  )
}

export default App;
