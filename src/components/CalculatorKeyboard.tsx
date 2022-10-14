import React, {FC} from 'react';
import {Box, Grid} from "@mui/material";
import CalculatorNumbersKeyboard from "./CalculatorNumbersKeyboard";
import CalculatorOperatorsKeyboard from "./CalculatorOperatorsKeyboard";
import CalculatorDeletingKeyboard from "./CalculatorDeletingKeyboard";

const CalculatorKeyboard: FC = () => {
    return (
        <Grid
            container
            direction="row"
        >
            <Box>
                <CalculatorDeletingKeyboard/>
                <CalculatorNumbersKeyboard/>
            </Box>
            <CalculatorOperatorsKeyboard/>
        </Grid>
    );
};

export default CalculatorKeyboard;