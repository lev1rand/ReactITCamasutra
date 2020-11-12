const SET_SONGS = "SET-SONGS"
const ADD_SONG = "ADD-SONG"
const DELETE_SONG = "DELETE-SONG"
let initialState = {
    songs: [
        {
            image: "https://www.udiscovermusic.com/wp-content/uploads/2019/04/Massive-Attack-Mezzanine-album-cover-web-optimised-820-820x600.jpg",
            songName:"Teardrop",
            isAdded:false
        },
        {
            image: "https://www.udiscovermusic.com/wp-content/uploads/2019/04/Massive-Attack-Mezzanine-album-cover-web-optimised-820-820x600.jpg",
            songName:"Voodoo in my blood",
            isAdded:false
        },
        {
            image: "https://www.udiscovermusic.com/wp-content/uploads/2019/04/Massive-Attack-Mezzanine-album-cover-web-optimised-820-820x600.jpg",
            songName:"Angel",
            isAdded:false
        }
    ]
};

const musicReducer = (state = initialState, action) => {
    switch (action) {
        case SET_SONGS:
            return {
                
                ...state, songs: [...action.songs]
            }

        default:
            return state;
    }

}

export const setSongs = (songs) => ({ type: SET_SONGS, songs: songs });
export const addSong = ()=>({type:ADD_SONG})
export default musicReducer;