const initState = [
    
]

const todoListReducer = (state = initState, action) => {
    switch(action.type) {
        case "todoList/addTodo":
            return [
                ...state,
                action.payload
            ]

        case "todoList/removeTodo":
            const newTodo = [...state]
            newTodo.splice(action.payload, 1)
            return newTodo

        default:
            return state;
    }
} 

export default todoListReducer;