import React from 'react';
import CalculatorOperatorButton from "./CalculatorOperatorButton";

const CalculatorDeletingKeyboard = () => {
    return (
        <div>
            <CalculatorOperatorButton name={"c"}
                                      style={{
                                          minWidth: '128px',
                                          minHeight: '40px'}}/>
            <CalculatorOperatorButton name={"<"}/>
        </div>
    );
};

export default CalculatorDeletingKeyboard;