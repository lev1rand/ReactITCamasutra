import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = 'SET-STATUS';
let initialState = {
    posts: [
        { id: 1, message: "Somebody once told me", likesCount: 0 },
        { id: 2, message: "The world is gonna roll me", likesCount: 17 }
    ],
    newPostText: '',
    userProfile: null,
    status: ''
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,
                {
                    id: 3,
                    message: state.newPostText,
                    likesCount: '1000'
                }],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, userProfile: profile })
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (id)=>{
    return (dispatch)=>{
        let userId = id;
        if(!userId) {
            userId = 12646;
        }
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}
export const getStatus = (id)=>{
    return (dispatch)=>{
        let userId = id;
        if(!userId) {
            userId = 12646;
        }
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            });
    }
}

export const updateStatus = (status)=>{
    return (dispatch)=>{
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export default profileReducer;