import React from "react"
import { connect } from "react-redux"
import Music from './Music'
import {setSongs} from '../../redux/musicReducer'

class MusicContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Music songs={this.props.songs}/>
    }
}
let matchStateToProps = (state) => {
    return {
        songs: state.musicPage.songs
    }
}

let matchDispatchToProps = (dispatch) => {
    return {
        setSongs: (songs) => {
            dispatch(setSongs(songs))
        }
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(MusicContainer);