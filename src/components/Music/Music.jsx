import React from 'react';
import s from './Music.module.css'

const Music = (props) => {

    let songs = props.songs.map((song)=>{
return(
        <div className={s.musicContainer}>
            <div>
                <img className={s.albumPic} src={song.image} />
            </div>
            <div className={s.main}>
                <span className={s.songName}>{song.songName}</span>
                <div className = {s.buttons}>
                    <button>Listen</button>
                    <button>Add</button>
                </div>

            </div>
        </div>
);
    })
    return (<>
        {songs}
    </>
    );
}

export default Music;