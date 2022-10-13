import React, {FC} from 'react';
import CalculatorNumberButton from "./CalculatorNumberButton";
import CalculatorOperatorButton from "./CalculatorOperatorButton";

const CalculatorKeyboard: FC = () => {
    return (
        <div>
                <div>
                    <CalculatorNumberButton name={"1"}/>
                    <CalculatorNumberButton name={"2"}/>
                    <CalculatorNumberButton name={"3"}/>
                    <tr/>
                    <CalculatorNumberButton name={"4"}/>
                    <CalculatorNumberButton name={"5"}/>
                    <CalculatorNumberButton name={"6"}/>
                    <tr/>
                    <CalculatorNumberButton name={"7"}/>
                    <CalculatorNumberButton name={"8"}/>
                    <CalculatorNumberButton name={"9"}/>
                    <tr/>
                    <CalculatorNumberButton name={"0"}/>
                    <CalculatorNumberButton name={"."}/>

                    <CalculatorOperatorButton name={"="}/>
                </div>

            <CalculatorOperatorButton name={"+"}/>
            <CalculatorOperatorButton name={"-"}/>
            <CalculatorOperatorButton name={"*"}/>
            <CalculatorOperatorButton name={"/"}/>

            <tr/>
            <CalculatorOperatorButton name={"c"}/>
            <CalculatorOperatorButton name={"<"}/>
        </div>
    );
};

export default CalculatorKeyboard;