import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 4,
    isFetching: false,
    isFollowing: []
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }

                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
                    }

                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowing:
                    action.isFetching
                        ? [...state.isFollowing, action.userId]
                        : state.isFollowing.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export const getUsers = (currentPage, pageSize)=>{
    return (dispatch)=>{

        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                    dispatch(toggleIsFetching(false));
                    dispatch(setUsers(data.items));
                    dispatch(setTotalUsersCount(data.totalCount));
                }
            );
    }
}

export const unfollowThunk = (userId) =>{
    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollowUser(userId)
            .then(data => {

                    if (data.resultCode === 0) {
                        dispatch(unfollow(userId));
                    }
                   dispatch(toggleFollowingProgress(false, userId));
                }
            );
    }
}

export const followThunk = (userId)=>{
    return(dispatch)=>{
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.followUser(userId)
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(follow(userId));
                    }
                    dispatch(toggleFollowingProgress(false, userId));
                }
            );
    }
}
export default userReducer;