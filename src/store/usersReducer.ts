import {Dispatch} from "redux";
import {ResponseType, UsersApi} from "../api/usersApi";
import {SetAppStatusAC} from "./app-reducer";

type ActionType =
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof SetAppStatusAC>

const initialState: Array<ResponseType> = []

export const usersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-USERS':
            return action.usersList.map((m: ResponseType) => ({...m}))
        default:
            return state
    }
}

export const setUsersAC = (usersList: any) => ({type: 'SET-USERS', usersList} as const)

export const setUsersTC = (value: number) => async (dispatch: Dispatch<ActionType>) => {
    try {
        dispatch(SetAppStatusAC('loading'))
        const res = await UsersApi.getUsers(value)
        dispatch(setUsersAC(res.data))
        dispatch(SetAppStatusAC('succeeded'))
    } catch (e) {
        console.log(e)
    }
}