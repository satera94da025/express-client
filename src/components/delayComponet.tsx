import React, {ChangeEvent, useCallback} from "react";

import {createMuiTheme, createStyles, makeStyles, Theme, ThemeProvider,} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {yellow} from '@material-ui/core/colors';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {SetDelayAC, SetValueAC} from "../store/valueReducer";
import Button from "@material-ui/core/Button";


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

export const Delay = React.memo(() => {

    const value = useSelector<AppRootStateType, number>(state => state.value.value)
    const dispatch = useDispatch()

    const setDelayHandler = useCallback(() => dispatch(SetDelayAC(value)), [dispatch, value])

    const changeDelayHandler = useCallback((e: ChangeEvent<HTMLInputElement>) =>
        dispatch(SetValueAC(e.currentTarget.valueAsNumber)), [dispatch])

    const classes = useStyles();
    return (<form noValidate>
            <ThemeProvider theme={theme}>
                <TextField
                    color="secondary"
                    variant="filled"
                    className={classes.margin}
                    label="Input delay (sec)"
                    id="mui-theme-provider-standard-input"
                    onChange={changeDelayHandler}
                    value={value}
                    type={'number'}
                />
            </ThemeProvider>
            <div>
                <Button onClick={setDelayHandler} variant="outlined" color="secondary">
                    set delay
                </Button>
            </div>
        </form>
    )
})