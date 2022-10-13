export function do_operation(secondOperand: number, firstOperand: number, operator: string | null){
    switch(operator){
        case "+":
            return plus(firstOperand, secondOperand)
        case "-":
            return minus(firstOperand, secondOperand)
        case "*":
            return multiplication(firstOperand, secondOperand)
        case "/":
            return divide(firstOperand, secondOperand)
        default:
    }
}

export function plus(firstOperand: number, secondOperand: number){
    return firstOperand + secondOperand;
}

export function minus(firstOperand: number, secondOperand: number){
    return firstOperand - secondOperand;
}

export function divide(firstOperand: number, secondOperand: number){
    return firstOperand / secondOperand;
}

export function multiplication(firstOperand: number, secondOperand: number){
    return firstOperand * secondOperand;
}
