import {authAPI} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const LOG_IN = 'LOG-IN';
const LOG_OUT = 'LOG-OUT';

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
                isAuthorized: true
            }
        case LOG_IN:
            return {
                ...state,
                isAuthorized: true
            }
        case LOG_OUT:
            return {
                ...state,
                isAuthorized: false
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
export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const logIn = () => ({type: LOG_IN});
export const logOut = () => ({type: LOG_OUT});

export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                    if (data.resultCode === 0) {
                        let {id, login, email} = data.data;
                        dispatch(setUserData(id, email, login));
                    }
                }
            );
    }
}

export default authReducer;