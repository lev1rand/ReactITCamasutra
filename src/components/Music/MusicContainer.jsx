import React from "react"
import { connect } from "react-redux"
import Music from './Music'
import { addSong, deleteSong, setSongs } from '../../redux/musicReducer'
import Login from "../Auth/Login";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class MusicContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(!this.props.isAuth){
            return <Login/>
        }
        return <Music
            songs={this.props.songs}
            addSong={this.props.addSong}
            deleteSong={this.props.deleteSong} />
    }
}


let mapStateToProps = (state) => {
    return {
        songs: state.musicPage.songs
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps,{
        setSongs,
        addSong,
        deleteSong})
)(MusicContainer);