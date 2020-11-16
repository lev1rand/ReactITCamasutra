import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navBarReducer from "./navBarReducer";
import userReducer from "./usersReducer";
import musicReducer from "./musicReducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        navBar: navBarReducer,
        usersPage: userReducer,
        musicPage: musicReducer,
        auth: authReducer
    }
);
let store = createStore(reducers);

export default store;