import {ExpressionAction, ExpressionState} from "../../types/todo";
import {do_operation} from "../../model/Computation";
import {expressionEndPoints} from "../../types/todo";

const initialState: ExpressionState = {
    currentNumber: 0,
    prevNumber: null,
    operator: null,
    display: "0",
    isOperatorChoosing: false,
}

export const expressionReducer = (state = initialState, action: ExpressionAction): ExpressionState => {
    switch (action.type){
        case expressionEndPoints.ADD_TO_DISPLAY:
            if (state.display === "0")
                return {
                    display: action.payload,
                    currentNumber: Number(action.payload),
                    prevNumber: state.prevNumber,
                    operator: state.operator,
                    isOperatorChoosing: false};
            else
                return {
                    display: state.display + action.payload,
                    currentNumber: Number(state.display + action.payload),
                    prevNumber: state.prevNumber,
                    operator: state.operator,
                    isOperatorChoosing: false};
        case expressionEndPoints.CLEAR_FULL_DISPLAY:
            return {display: "0",
                currentNumber: 0,
                prevNumber: state.prevNumber,
                operator: state.operator,
                isOperatorChoosing: state.isOperatorChoosing,};
        case expressionEndPoints.CLEAR_DISPLAY_SYMBOL:
            return {display: state.display.substring(0, state.display.length - 1),
                currentNumber: Number(state.display),
                prevNumber: state.prevNumber,
                operator: state.operator,
                isOperatorChoosing: state.isOperatorChoosing,};
        case expressionEndPoints.SET_OPERATOR:
            return {display: state.display,
                currentNumber: state.currentNumber,
                prevNumber: state.prevNumber,
                operator: action.payload,
                isOperatorChoosing: true,};
        case expressionEndPoints.SET_PREV:
            return {display: state.display,
                currentNumber: Number(state.display),
                prevNumber: Number(state.display),
                operator: state.operator,
                isOperatorChoosing: true,};
        case expressionEndPoints.EQUAL: {
            const answer = do_operation(state.currentNumber, Number(state.prevNumber), state.operator);
            if(answer !== undefined)
                if(action.payload !== "=")
                    return {
                        display: String(answer),
                        currentNumber: Number(answer),
                        prevNumber: Number(answer),
                        operator: action.payload,
                        isOperatorChoosing: true,
                    };
                else
                    return {
                        display: String(answer),
                        currentNumber: Number(answer),
                        prevNumber: null,
                        operator: action.payload,
                        isOperatorChoosing: false,
                    };
            else
                return state;
        }
        default:
            return state
    }

}
