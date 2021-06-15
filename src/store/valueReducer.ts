const initialState = {
    value: 5 as number,
    valueForMessage: 5 as number,
    delay: 5 as number,
    timer: null as NodeJS.Timeout | null
}

type InitialStateType = typeof initialState

export const valueReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-VALUE':
            return {...state, value: action.value}
        case 'SET-VALUE-MESSAGE':
            return {...state, valueForMessage: action.valueForMessage}
        case 'SET-DELAY':
            return {...state, delay: action.delay}
        case 'SET-TIMER':
            return {...state, timer: action.timer}
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof SetValueAC> | ReturnType<typeof SetDelayAC> | ReturnType<typeof SetTimerAC> | ReturnType<typeof SetValueForMessageAC>

export const SetValueAC = (value: number) =>  ({type: 'SET-VALUE', value} as const)
export const SetValueForMessageAC = (valueForMessage: number) =>  ({type: 'SET-VALUE-MESSAGE', valueForMessage} as const)
export const SetDelayAC = (delay: number) =>  ({type: 'SET-DELAY', delay} as const)
export const SetTimerAC = (timer: NodeJS.Timeout | null) =>  ({type: 'SET-TIMER', timer} as const)