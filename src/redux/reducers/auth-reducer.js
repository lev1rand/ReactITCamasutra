import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    id: '',
    email: '',
    login: '',
    isFetching: false,
    isAuthorized: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuthorized: action.data.isAuthorized
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const setUserData = (id, email, login, isAuthorized) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuthorized}
});

export const authMe = () => async (dispatch) => {
    let data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const logIn = (email, password, rememberMe) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(authMe());
        dispatch(toggleIsFetching(false));
    } else {
        let errorMessage = response.data.messages.length ? response.data.messages[0] : "Error!";

        dispatch(stopSubmit("login", {_error: errorMessage}));
    }

}

export const logOut = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;