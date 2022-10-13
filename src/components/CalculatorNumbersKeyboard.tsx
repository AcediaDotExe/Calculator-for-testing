import React from 'react';
import CalculatorNumberButton from "./CalculatorNumberButton";
import CalculatorOperatorButton from "./CalculatorOperatorButton";
import {Grid} from "@mui/material";

const CalculatorNumbersKeyboard = () => {
    return (
        <Grid>
            <div>
                <CalculatorNumberButton name={"1"}/>
                <CalculatorNumberButton name={"2"}/>
                <CalculatorNumberButton name={"3"}/>
            </div>
            <div>
                <CalculatorNumberButton name={"4"}/>
                <CalculatorNumberButton name={"5"}/>
                <CalculatorNumberButton name={"6"}/>
            </div>
            <div>
                <CalculatorNumberButton name={"7"}/>
                <CalculatorNumberButton name={"8"}/>
                <CalculatorNumberButton name={"9"}/>
            </div>
            <div>
                <CalculatorNumberButton name={"0"}
                                        style={{
                                            minWidth: '128px',
                                            minHeight: '42px'}}
                />
                <CalculatorNumberButton name={"."}/>
            </div>
        </Grid>
    );
};

export default CalculatorNumbersKeyboard;