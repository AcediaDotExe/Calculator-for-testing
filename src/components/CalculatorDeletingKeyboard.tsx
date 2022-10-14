import React from 'react';
import CalculatorOperatorButton from "./CalculatorOperatorButton";

const CalculatorDeletingKeyboard = () => {
    return (
        <div>
            <CalculatorOperatorButton name={"c"}
                                      style={{
                                          minWidth: '128px',
                                          minHeight: '40px'}}
                                      id={"clear"}
            />
            <CalculatorOperatorButton name={"<"}
                                      id={"del"}/>
        </div>
    );
};

export default CalculatorDeletingKeyboard;