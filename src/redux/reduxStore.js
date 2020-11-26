import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";
import navBarReducer from "./reducers/navBarReducer";
import userReducer from "./reducers/usersReducer";
import musicReducer from "./reducers/musicReducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./reducers/app-reducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        navBar: navBarReducer,
        usersPage: userReducer,
        musicPage: musicReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;