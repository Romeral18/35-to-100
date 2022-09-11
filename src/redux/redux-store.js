import {combineReducers,  legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import staticReducer from "./static-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    staticPages: staticReducer
})

let store = legacy_createStore(reducers);

export default store;