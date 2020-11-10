const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
    posts: [
        { id: 1, message: "Somebody once told me", likesCount: 0 },
        { id: 2, message: "The world is gonna roll me", likesCount: 17 }
    ],
    newPostText: ''
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
                newPostText:''
            }

        case UPDATE_NEW_POST_TEXT:
            return{
                ...state,
                newPostText: action.newText
            }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })

export default profileReducer;