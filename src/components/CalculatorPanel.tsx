import React, {FC} from 'react';
import { useSelector} from "react-redux";
import {ExpressionState} from "../types/todo";

const CalculatorPanel: FC = () => {
    const display: any = useSelector<ExpressionState>(state => state.display);
    const memory: any = useSelector<ExpressionState>(state => String(state.prevNumber));

    return (
        <div>
            <div>
                Prev: {memory}
            </div>
                Current: {display}
        </div>
    );
};

export default CalculatorPanel;