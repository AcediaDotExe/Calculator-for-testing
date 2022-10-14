import {createStore} from "redux";
import {expressionReducer} from "./reducers/reducer";


export const store = createStore(expressionReducer);