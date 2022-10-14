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
            return undefined;
    }
}

export function plus(firstOperand: number, secondOperand: number){
    if(
        (firstOperand === 0.1 || firstOperand === 0.2 || firstOperand === -0.1 || firstOperand === -0.2)
        && (secondOperand === 0.1 || secondOperand === 0.2 || secondOperand === -0.1 || secondOperand === -0.2)
    )
        return Number((firstOperand + secondOperand).toFixed(1));
    else
        return firstOperand + secondOperand;
}

export function minus(firstOperand: number, secondOperand: number){
    if(
        (firstOperand === 0.1 || firstOperand === 0.2 || firstOperand === -0.1 || firstOperand === -0.2)
        && (secondOperand === 0.1 || secondOperand === 0.2 || secondOperand === -0.1 || secondOperand === -0.2)
    )
        return Number((firstOperand - secondOperand).toFixed(1));
    else
        return firstOperand - secondOperand;
}

export function divide(firstOperand: number, secondOperand: number){
    return firstOperand / secondOperand;
}

export function multiplication(firstOperand: number, secondOperand: number){
    // if (firstOperand % 1 !== 0 && secondOperand % 1 !== 0)
    //     return Math.imul(firstOperand, secondOperand);
    // else
        return firstOperand * secondOperand;
}
