import React, {FC} from 'react';
import CalculatorPanel from "./CalculatorPanel";
import CalculatorKeyboard from "./CalculatorKeyboard";
import {Box, Container, Grid} from "@mui/material";

const Calculator: FC = () => {
    return (
        <Box sx={{
            mt: '250px',
            bgcolor: 'text.disabled',
            border: 3,
            borderColor: '#000000',
            borderRadius: '10px',
            boxShadow: 10,
        }}
        >
            <CalculatorPanel/>
            <CalculatorKeyboard/>
        </Box>
    );
};

export default Calculator;