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
            />
            <CalculatorOperatorButton name={"-"}
                                      style={{
                                          minWidth: '64px',
                                          minHeight: '105px'}}
            />
            <tr/>
            <CalculatorOperatorButton name={"*"}
                                      style={{
                                          minWidth: '64px',
                                          minHeight: '40px'}}
            />
            <CalculatorOperatorButton name={"/"}
                                      style={{
                                          minWidth: '64px',
                                          minHeight: '40px'}}
            />
            <tr/>
            <CalculatorOperatorButton name={"="}
                                      style={{
                                          minWidth: '128px',
                                          minHeight: '65px'}}
            />

        </Grid>
    );
};

export default CalculatorOperatorsKeyboard;