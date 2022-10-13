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
    const isOperatorChoosing = useSelector(state => state.isOperatorChoosing);

    function doOwnOperation(e: MouseEvent){
        if(name === "c"){
            dispatch({type: expressionEndPoints.CLEAR_FULL_DISPLAY})
        } else {
            if (prevNumber === null) {
                dispatch({type: expressionEndPoints.SET_OPERATOR, payload: name})
                dispatch({type: expressionEndPoints.SET_PREV})

                dispatch({type: expressionEndPoints.CLEAR_FULL_DISPLAY})
            } else {
                if (isOperatorChoosing === true && name !== "=") {
                    dispatch({type: expressionEndPoints.SET_OPERATOR, payload: name})
                } else {
                    dispatch({type: expressionEndPoints.EQUAL})
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