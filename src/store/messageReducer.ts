
const initialState = {
    message: 5 as number
}

type InitialStateType = typeof initialState

export const messageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-MESSAGE':
            return {...state, message: action.message}
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof SetMessageAC>

export const SetMessageAC = (message: number) =>  ({type: 'SET-MESSAGE', message} as const)



