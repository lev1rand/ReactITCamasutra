import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navBarReducer from "./navBarReducer";
import userReducer from "./usersReducer";
import musicReducer from "./musicReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        navBar: navBarReducer,
        usersPage: userReducer,
        musicPage: musicReducer,
        auth: authReducer,
        form: formReducer
    }
);
let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;