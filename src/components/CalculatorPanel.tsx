import React, {FC} from 'react';
import { useSelector} from "react-redux";
import {ExpressionState} from "../types/types";
import {Typography} from "@mui/material";

const CalculatorPanel: FC = () => {
    const display: any = useSelector<ExpressionState>(state => state.display);
    const memory: any = useSelector<ExpressionState>(state => state.prevNumber);

    return (
        <div>
            <Typography fontSize={16} textAlign="right" style={{color: '#893101'}}>
                {(memory != null ? memory : <> empty</>)}
            </Typography>

            <Typography fontSize={24} textAlign="right" style={{color: '#FFA500'}}>
                {display}
            </Typography>
        </div>
    );
};

export default CalculatorPanel;