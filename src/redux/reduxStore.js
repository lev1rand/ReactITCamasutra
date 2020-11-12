import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navBarReducer from "./navBarReducer";
import userReducer from "./usersReducer";
import musicReducer from "./musicReducer";

let reducers  = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        navBar: navBarReducer,
        usersPage: userReducer,
        musicPage: musicReducer
    }
);
let store = createStore(reducers);

export default store;