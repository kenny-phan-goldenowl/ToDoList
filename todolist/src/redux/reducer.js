const initState = {
    filter: {
        search: '',
        status: 'All'
    },
    todoList: [
        
    ]
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case "todoList/addTodo":
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case "todoList/removeTodo":
            const newTodo = [...state.todoList]
            newTodo.splice(action.payload, 1)
            return {
                ...state,
                todoList: newTodo
            }
        case "filter/searchTask":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    search: action.payload
                }
            }
        case "filter/statusChange":
            return {
                ...state,
                filter: {
                    ...state.filter,
                    status: action.payload
                }
            }
        default:
            return state;
    }
} 

export default reducer;