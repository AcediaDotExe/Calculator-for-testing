import React, {FC, MouseEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {expressionEndPoints} from "../types/types";
import {Button} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import {buttonsTheme} from "../materialUI/themes";

interface CalculatorNumberButtonProps {
    name: string;
    style?: any;
}

const CalculatorNumberButton: FC<CalculatorNumberButtonProps> = ({ name, style}) => {
    const dispatch = useDispatch();
    // @ts-ignore
    const display = useSelector(state => state.display);
    // @ts-ignore
    const isOperatorChoosing = useSelector(state => state.isOperatorChoosing);
    // @ts-ignore
    const currentNumber = useSelector(state => state.currentNumber);
    // @ts-ignore
    const prevNumber = useSelector(state => state.prevNumber);
    const regExp = /[a-zA-Z]/g;
    function addToDisplay(e: MouseEvent<HTMLButtonElement>) {
        if (display.length <= 22) {
            if (regExp.test(display)){
                dispatch({type: expressionEndPoints.CLEAR_FULL_DISPLAY})
            }
            if (name === ".") {
                if (!display.includes('.')) {
                    if (display === "0" || display.length === 0){
                        dispatch({type: expressionEndPoints.ADD_TO_DISPLAY, payload: "0" + name})
                    } else
                        dispatch({type: expressionEndPoints.ADD_TO_DISPLAY, payload: name})
                }
            } else {
                if (isOperatorChoosing === true) {
                    dispatch({type: expressionEndPoints.CLEAR_FULL_DISPLAY})
                    dispatch({type: expressionEndPoints.ADD_TO_DISPLAY, payload: name})
                } else {
                    dispatch({type: expressionEndPoints.ADD_TO_DISPLAY, payload: name})
                }
            }
        }
    }

    return (
        <ThemeProvider theme={buttonsTheme}>
            <Button variant="contained" size="large" color="warning" onClick={addToDisplay} style={style}
                    data-testid={name} id={"b" + name}
            >
                {name}
            </Button>
        </ThemeProvider>
    );
};


export default CalculatorNumberButton;
