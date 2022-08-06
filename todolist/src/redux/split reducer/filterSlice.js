const initState = {
    search: '',
    status: 'All'
}

const filterReducer = (state = initState, action) => {
    switch(action.type) {
        case "filter/searchTask":
            return {
                ...state,
                search: action.payload
            };
        case "filter/statusChange":
            return {
                ...state,
                status: action.payload
            }
        
        default:
            return state;
    }
} 

export default filterReducer;