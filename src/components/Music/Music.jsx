import React from 'react';
import s from './Music.module.css'

const Music = (props) => {
    return <div>
            {props.songs.map((song)=>{
                return <div className={s.musicContainer}>
                <div>
                    <img className={s.albumPic} src={song.image} />
                </div>
                <div className={s.main}>
                    <span className={s.songName}>{song.songName}</span>
                    <div className={s.buttons}>
                        <button>Listen</button>
                        {song.isAdded
                            ? <button onClick={
                                () => { props.deleteSong(song.id) }
                            }>
                                Delete
                                </button>
    
                            : <button onClick={
                                () => { props.addSong(song.id) }
                            }>
                                Add
                                    </button>
                        }
    
                    </div>
    
                </div>
            </div>
            })
    }
    </div>
}

export default Music;