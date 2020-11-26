import {profileAPI} from "../../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = 'SET-STATUS';
let initialState = {
    posts: [
        {id: 1, message: "Somebody once told me", likesCount: 0},
        {id: 2, message: "The world is gonna roll me", likesCount: 17}
    ],
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
                        message: action.postText,
                        likesCount: '1000'
                    }],
                newPostText: ''
            }

        case SET_USER_PROFILE:
            let i = {
                ...state,
                userProfile: action.userProfile
            }
            return i;

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}

export const addPost = (postText) => ({type: ADD_POST, postText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, userProfile: profile})
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (id) => async (dispatch) => {
    let response = await profileAPI.getProfile(id);
    dispatch(setUserProfile(response));
}

export const getStatus = (id) => async (dispatch) => {
    let response = await profileAPI.getStatus(id);
    dispatch(setStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}


export default profileReducer;