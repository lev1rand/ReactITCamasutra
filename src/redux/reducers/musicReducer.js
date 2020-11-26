const SET_SONGS = "SET-SONGS"
const ADD_SONG = "ADD-SONG"
const DELETE_SONG = "DELETE-SONG"
let initialState = {
    songs: [
        {
            id:1,
            image: "https://www.udiscovermusic.com/wp-content/uploads/2019/04/Massive-Attack-Mezzanine-album-cover-web-optimised-820-820x600.jpg",
            songName: "Teardrop",
            isAdded: false
        },
        {
            id:2,
            image: "https://www.udiscovermusic.com/wp-content/uploads/2019/04/Massive-Attack-Mezzanine-album-cover-web-optimised-820-820x600.jpg",
            songName: "Voodoo in my blood",
            isAdded: false
        },
        {
            id:3,
            image: "https://www.udiscovermusic.com/wp-content/uploads/2019/04/Massive-Attack-Mezzanine-album-cover-web-optimised-820-820x600.jpg",
            songName: "Angel",
            isAdded: true
        }
    ]
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONGS:
            return {
                ...state, songs: [...action.songs]
            }

        case ADD_SONG:
            return {
                ...state, 
                songs: state.songs.map(s=>{
                    if(s.id === action.id){
                        return{
                            ...s, isAdded:true
                        }
                    }

                    return s;
                })
            }

        case DELETE_SONG:
            return {
                ...state, 
                songs: state.songs.map(s=>{
                    if(s.id === action.id){
                        return {
                            ...s, isAdded:false
                        }
                    }
                        return s;
                })
            }

        default:
            return state;
    }

}

export const setSongs = (songs) => ({ type: SET_SONGS, songs: songs });
export const addSong = (songId) => ({ type: ADD_SONG, id: songId });
export const deleteSong = (songId) => ({ type: DELETE_SONG, id: songId });

export default musicReducer;