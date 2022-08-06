import { createStore } from "redux";
import reducer from "./reducer";
import rootReducer from "./split reducer/rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools();
const store = createStore(reducer, composedEnhancer);

export default store;