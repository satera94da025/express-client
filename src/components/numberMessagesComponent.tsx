import React, {ChangeEvent, useCallback} from "react";

import {createMuiTheme, createStyles, makeStyles, Theme, ThemeProvider,} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {yellow} from '@material-ui/core/colors';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import Button from "@material-ui/core/Button";
import {SetMessageAC} from "../store/messageReducer";
import {SetValueForMessageAC} from "../store/valueReducer";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',

        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '50ch',
        },
        margin: {
            margin: theme.spacing(1),
        },
    }),
);

const theme = createMuiTheme({
    palette: {
        primary: yellow,
    },

});

export const NumberMessages = React.memo(() => {


    const valueForMessage = useSelector<AppRootStateType, number>(state => state.value.valueForMessage)
    const dispatch = useDispatch()

    const setMessageHandler = useCallback(() => dispatch(SetMessageAC(valueForMessage)),[dispatch,valueForMessage])
    const changeNumberMessagesHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch(SetValueForMessageAC(e.currentTarget.valueAsNumber)),[dispatch])
    const classes = useStyles();
    return (<form  noValidate>
            <ThemeProvider theme={theme}>
                <TextField
                    color="secondary"
                    variant="filled"
                    className={classes.margin}
                    label="Input number of last messages"
                    id="mui-theme-provider-standard-input"
                    onChange={changeNumberMessagesHandler}
                    value={valueForMessage}
                    type={'number'}
                />
            </ThemeProvider>
            <div >
                <Button onClick={setMessageHandler} variant="outlined" color="secondary">
                    set  messages
                </Button>
            </div>
        </form>
    )
})