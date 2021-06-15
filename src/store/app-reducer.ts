
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsTypeAPP): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}
export type ActionsTypeAPP = ReturnType<typeof SetAppStatusAC>

export const SetAppStatusAC = (status: RequestStatusType) =>  ({type: 'APP/SET-STATUS', status} as const)




