import React from 'react';
import { NavLink } from 'react-router-dom';
import StoreContext from '../../storeContext';
import Friends from './Friends/Friends'
import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    // <StoreContext.Consumer>
    //   {
    //     (store) => {
    //       debugger;
    //    let state = store.getState();

    //    let friendInfo  = state.navBar.friendInfo; return
    (<nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}> Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
      </div>

      {/* <Friends friendInfo={friendInfo} /> */}
    </nav>))
}
//     }
//   }
// </StoreContext.Consumer>)

export default Navbar;