import thunk from "redux-thunk";
import { applyMiddleware,combineReducers, createStore} from 'redux';
import {usersReducer} from "./usersReducer";
import {appReducer} from "./app-reducer";
import {messageReducer} from "./messageReducer";
import {valueReducer} from "./valueReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    app:appReducer,
    message: messageReducer,
    value: valueReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;