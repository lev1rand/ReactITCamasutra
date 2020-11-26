import './App.css';
import React from 'react';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {withRouter, Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import UsersContainer from './components/User/UsersContainer';
import MusicContainer from './components/Music/MusicContainer';
import NavBarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/common/Header/HeaderContainer";
import Login from "./components/common/Auth/Login";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/reducers/app-reducer";
import {compose} from "redux";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return (
                <Preloader/>
            )
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBarContainer/>
                <div className='app-wrapper-content'>
                    <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route exact path='/music' render={() => <MusicContainer/>}/>
                    <Route exact path='/settings' render={() => <Settings/>}/>
                    <Route exact path='/news' render={() => <News/>}/>
                    <Route exact path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

