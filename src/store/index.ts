import {createStore} from "redux";
import {expressionReducer} from "./reducers/expressionReduser";


export const store = createStore(expressionReducer);