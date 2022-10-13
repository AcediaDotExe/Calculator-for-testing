export interface ExpressionState {
    currentNumber: number;
    prevNumber: number | null;
    operator: null | string;
    display: string;
    isOperatorChoosing: boolean;
}

export interface ExpressionAction{
    type: string;
    payload?: any;
}

export enum expressionEndPoints {
    ADD_TO_DISPLAY = "ADD_TO_DISPLAY",
    PLUS = "PLUS",
    MINUS = "MINUS",
    MULTIPLICATION = "MULTIPLICATION",
    DIVIDE = "DIVIDE",
    CLEAR_FULL_DISPLAY = "CLEAR_FULL_DISPLAY",
    CLEAR_DISPLAY_SYMBOL = "CLEAR_DISPLAY_SYMBOL",
    EQUAL = "EQUAL",
    SAVE_IN_MEMORY = "SAVE_IN_MEMORY",
    SET_OPERATOR = "SET_OPERATOR",
    SET_PREV = "SET_PREV",
}