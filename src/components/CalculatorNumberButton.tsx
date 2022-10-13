import React, {FC, MouseEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {expressionEndPoints} from "../types/todo";

interface CalculatorNumberButtonProps {
    name: string;
}

const CalculatorNumberButton: FC<CalculatorNumberButtonProps> = ({ name}) => {
    const dispatch = useDispatch();
    // @ts-ignore
    const operator = useSelector(state => state.operator);
    // @ts-ignore
    const currentNumber = useSelector(state => state.currentNumber);
    // @ts-ignore
    const prevNumber = useSelector(state => state.prevNumber);

    function addToDisplay(e: MouseEvent<HTMLButtonElement>) {
        if(operator !== null && currentNumber === prevNumber){

        } else {
            dispatch({type:expressionEndPoints.ADD_TO_DISPLAY, payload: name})
        }
    }

    return (
        <button onClick={addToDisplay}>
            {name}
        </button>
    );
};

export default CalculatorNumberButton;
