import React, {FC, MouseEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {expressionEndPoints} from "../types/types";
import {Button, ThemeProvider} from "@mui/material";
import {buttonsTheme} from "../materialUI/themes";

interface CalculatorOperatorButtonProps{
    name: string,
    style?: any,
    id: string,
}

const CalculatorOperatorButton: FC<CalculatorOperatorButtonProps> = ({name, style, id}) => {
    const dispatch = useDispatch();
    // @ts-ignore
    const display = useSelector(state => state.display);
    // @ts-ignore
    const prevNumber = useSelector(state => state.prevNumber);
    // @ts-ignore
    const isOperatorChoosing = useSelector(state => state.isOperatorChoosing);
    const regExp = /[a-zA-Z]/g;
    function doOwnOperation(e: MouseEvent) {
        if (regExp.test(display)){
            dispatch({type: expressionEndPoints.CLEAR_FULL_DISPLAY})
        }
        if (name === "<") {
            if(display.length === 1) {
                dispatch({type: expressionEndPoints.CLEAR_FULL_DISPLAY})
            } else {
                dispatch({type: expressionEndPoints.CLEAR_DISPLAY_SYMBOL})
            }
        } else {
            if (name === "c") {
                dispatch({type: expressionEndPoints.CLEAR_FULL_DISPLAY})
            } else {
                if (prevNumber === null) {
                    if (name === "=") {
                        dispatch({type: expressionEndPoints.EQUAL})
                    } else {
                        dispatch({type: expressionEndPoints.SET_OPERATOR, payload: name})
                        dispatch({type: expressionEndPoints.SET_PREV})

                        // dispatch({type: expressionEndPoints.CLEAR_FULL_DISPLAY})
                    }
                } else {
                    if (isOperatorChoosing === true && name !== "=") {
                        dispatch({type: expressionEndPoints.SET_OPERATOR, payload: name})
                    } else {
                        dispatch({type: expressionEndPoints.EQUAL, payload: name})
                    }
                }
            }
        }
        if (regExp.test(display)){
            dispatch({type: expressionEndPoints.CLEAR_FULL_DISPLAY})
        }
    }

    return (
        <ThemeProvider theme={buttonsTheme}>
            <Button onClick={doOwnOperation} size="large" variant="contained" color="secondary" style={style}
                    data-testid={name} id={"b" + id}
            >
                {name}
            </Button>
        </ThemeProvider>
    );
};

export default CalculatorOperatorButton;