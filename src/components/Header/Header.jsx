import React from 'react';
import s from "./Header.module.css";
import title from'../../assets/images/title.png'
const Header = () => {
    return (<header className={s.header}>
        <img src={title} />
    </header>);
}

export default Header;