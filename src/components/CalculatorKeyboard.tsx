import React, {FC} from 'react';
import CalculatorNumberButton from "./CalculatorNumberButton";
import CalculatorOperatorButton from "./CalculatorOperatorButton";

const CalculatorKeyboard: FC = () => {
    return (
        <div>
            <CalculatorNumberButton name={"1"}/>
            <CalculatorNumberButton name={"2"}/>
            <CalculatorNumberButton name={"3"}/>
            <CalculatorNumberButton name={"4"}/>
            <CalculatorNumberButton name={"5"}/>
            <CalculatorNumberButton name={"6"}/>
            <CalculatorNumberButton name={"7"}/>
            <CalculatorNumberButton name={"8"}/>
            <CalculatorNumberButton name={"9"}/>
            <CalculatorNumberButton name={"0"}/>

            <CalculatorOperatorButton name={"+"}/>
            <CalculatorOperatorButton name={"-"}/>
            <CalculatorOperatorButton name={"*"}/>
            <CalculatorOperatorButton name={"/"}/>
            <CalculatorOperatorButton name={"="}/>

            <CalculatorOperatorButton name={"c"}/>
        </div>
    );
};

export default CalculatorKeyboard;