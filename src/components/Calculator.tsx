import React, {FC} from 'react';
import CalculatorPanel from "./CalculatorPanel";
import CalculatorKeyboard from "./CalculatorKeyboard";

const Calculator: FC = () => {
    return (
        <div>
            <CalculatorPanel/>
            <CalculatorKeyboard/>
        </div>
    );
};

export default Calculator;