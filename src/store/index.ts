import {createStore} from "redux";
import {expressionReducer} from "./reducers/expressionReducer";


export const store = createStore(expressionReducer);