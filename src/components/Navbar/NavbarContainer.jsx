import { connect } from 'react-redux';
import NavBar from './Navbar';


let mapStateToProps = (state) => {
  return {
    friendInfo: state.navBar.friendInfo
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
   
  }
}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;
