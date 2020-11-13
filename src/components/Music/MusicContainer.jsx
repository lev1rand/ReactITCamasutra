import React from "react"
import { connect } from "react-redux"
import Music from './Music'
import { addSong, deleteSong, setSongs } from '../../redux/musicReducer'

class MusicContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
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

export default connect(mapStateToProps,{
    setSongs,
    addSong,
    deleteSong})(MusicContainer);