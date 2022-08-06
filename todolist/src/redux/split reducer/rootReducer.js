import todoListReducer from "./todoListSlice";
import filterReducer from "./filterSlice";
import {combineReducers} from 'redux'


// const rootReducer = (state = {}, action) => {
//     return {
//         filter: filterReducer(state.filter, action),
//         todoList: todoListReducer(state.todoList, action),
//     };
// };

const rootReducer = combineReducers({
    filter: filterReducer,
    todoList: todoListReducer,
})


export default rootReducer;