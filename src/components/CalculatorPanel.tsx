import React, {FC} from 'react';
import { useSelector} from "react-redux";
import {ExpressionState} from "../types/todo";
import {Typography} from "@mui/material";

const CalculatorPanel: FC = () => {
    const display: any = useSelector<ExpressionState>(state => state.display);
    const memory: any = useSelector<ExpressionState>(state => state.prevNumber);

    return (
        <div>
            <Typography fontSize={16} textAlign="right">
                {(memory != null ? memory : <> empty</>)}
            </Typography>

            <Typography fontSize={24} textAlign="right">
                {display}
            </Typography>
        </div>
    );
};

export default CalculatorPanel;