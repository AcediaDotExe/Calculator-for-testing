import React from 'react';
import {Grid} from "@mui/material";
import CalculatorOperatorButton from "./CalculatorOperatorButton";

const CalculatorOperatorsKeyboard = () => {
    return (
        <Grid
            justifyContent="flex-start"
        >
            <CalculatorOperatorButton name={"+"}
                                      style={{
                                          minWidth: '64px',
                                          minHeight: '105px'}}
                                      id={"plus"}
            />
            <CalculatorOperatorButton name={"-"}
                                      style={{
                                          minWidth: '64px',
                                          minHeight: '105px'}}
                                      id={"minus"}
            />
            <br/>
            <CalculatorOperatorButton name={"*"}
                                      style={{
                                          minWidth: '64px',
                                          minHeight: '40px'}}
                                      id={"mul"}
            />
            <CalculatorOperatorButton name={"/"}
                                      style={{
                                          minWidth: '64px',
                                          minHeight: '40px'}}
                                      id={"d"}
            />
            <br/>
            <CalculatorOperatorButton name={"="}
                                      style={{
                                          minWidth: '128px',
                                          minHeight: '65px'}}
                                      id={"equal"}
            />

        </Grid>
    );
};

export default CalculatorOperatorsKeyboard;