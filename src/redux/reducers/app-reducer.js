import {authMe} from "./auth-reducer";

const SET_INITIALIZED_SUCCESSFUL = "SET-INITIALIZED-SUCCESSFUL";

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESSFUL:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const setInitializedSuccessful = () => ({type: SET_INITIALIZED_SUCCESSFUL});

export const initializeApp = () => async (dispatch) => {
    let data = await dispatch(authMe());
    dispatch(setInitializedSuccessful(data));
}
export default appReducer;