import React, {FC, MouseEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {expressionEndPoints} from "../types/todo";

interface CalculatorNumberButtonProps {
    name: string;
}

const CalculatorNumberButton: FC<CalculatorNumberButtonProps> = ({ name}) => {
    const dispatch = useDispatch();
    // @ts-ignore
    const display = useSelector(state => state.display);
    // @ts-ignore
    const isOperatorChoosing = useSelector(state => state.isOperatorChoosing);
    // @ts-ignore
    const currentNumber = useSelector(state => state.currentNumber);
    // @ts-ignore
    const prevNumber = useSelector(state => state.prevNumber);

    function addToDisplay(e: MouseEvent<HTMLButtonElement>) {
        if(name === ".") {
            if (!display.includes('.')) {
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

    return (
        <button onClick={addToDisplay}>
            {name}
        </button>
    );
};

export default CalculatorNumberButton;
