import React, {FC, MouseEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {expressionEndPoints} from "../types/todo";

interface CalculatorOperatorButtonProps{
    name: string,
}

const CalculatorOperatorButton: FC<CalculatorOperatorButtonProps> = ({name}) => {
    const dispatch = useDispatch();

    // @ts-ignore
    const prevNumber = useSelector(state => state.prevNumber);
    // @ts-ignore
    const currentNumber = useSelector(state => state.currentNumber);
    // @ts-ignore
    const isOperatorChoosing = useSelector(state => state.isOperatorChoosing);

    function doOwnOperation(e: MouseEvent) {
        if (name === "<") {
            dispatch({type: expressionEndPoints.CLEAR_DISPLAY_SYMBOL})
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

    }

    return (
        <button onClick={doOwnOperation}>
            {name}
        </button>
    );
};

export default CalculatorOperatorButton;