import React from 'react';
import s from "./Header.module.css";
import title from '../../assets/images/title.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<header className={s.header}>
        <img src={title}/>
        <div className={s.loginBlock}>
            {
                props.isAuthorized
                    ? props.login
                    : <NavLink to='/login'>Login </NavLink>
            }

        </div>
    </header>);
}

export default Header;