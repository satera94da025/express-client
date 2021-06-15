import React, { useEffect} from 'react';
import './App.css';
import {ResponseType} from "./api/usersApi";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {setUsersTC} from "./store/usersReducer";
import Preloader from "./materialUi/preloader";
import {RequestStatusType} from "./store/app-reducer";
import s from './Message.module.css'
import { SetTimerAC} from "./store/valueReducer";
import {Delay} from "./components/delayComponet";
import {NumberMessages} from "./components/numberMessagesComponent";

function App() {

    const users = useSelector<AppRootStateType, Array<ResponseType>>(state => state.users)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const numberMessages = useSelector<AppRootStateType, number>(state => state.message.message)
    const delay = useSelector<AppRootStateType, number>(state => state.value.delay)
    const timer = useSelector<AppRootStateType, NodeJS.Timeout | null>(state => state.value.timer)
    const dispatch = useDispatch()

    useEffect(() => {
        timer && clearInterval(timer)
        const timerId = setInterval(() => {
            dispatch(setUsersTC(numberMessages))
        }, delay * 1000)
        dispatch(SetTimerAC(timerId))
    }, [dispatch, delay, numberMessages])

    return (
        <div className="App">
            <div className={'wrap'}>
                <Delay/>
                <NumberMessages/>
            </div>
            {status === 'loading' && <Preloader/>}
            {users.map((el: ResponseType) =>
                <div key={el.id} className={s.wrap}>
                    <div className={s.messageBlock}>
                        <img className={s.avatar}
                             src={"https://i.pinimg.com/236x/8a/0f/d4/8a0fd446e82e2b1d41d5eb1f5e8f303c.jpg"}
                             alt={'avatar'}/>
                        <div className={s.message}>
                            <span className={s.messageName}> {el.name}</span>
                            <p className={s.messageMessage}> {el.message}</p>
                            <span className={s.messageTime}> {el.date} </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
