const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
    ],
    totalUsersCount: 20,
    pageSize: 5,
    currentPage: 1
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
            //debugger;
            var s = { ...state };
            //alert(s.users.length);
            //alert(action.users.length);
            return { ...state, users: [...state.users, ...action.users] }

        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId: userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId })
export const setUsers = (users) => ({ type: SET_USERS, users: users });

export default userReducer;