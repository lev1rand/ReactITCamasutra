const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    posts: [
        { id: 1, message: "Somebody once told me", likesCount: 0 },
        { id: 2, message: "The world is gonna roll me", likesCount: 17 }
    ],
    newPostText: '',
    userProfile: null
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, userProfile: profile })
export default profileReducer;