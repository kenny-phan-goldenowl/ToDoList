
// REDUCERS -> simple function with 2 argument (currentState, action), mainly used to update state value in the store
const initValue = {age: 10}

// check the current action to perform specify logic
// newState will always be calculated base on the previous state
// try not to change the state value, use immutability instead
// no async function in reducer like: Math.random(), Date.now(), apiCall, etc because these func return different res after each call
// pure function are allowable
const reducer = (state = initValue, action) => {

    // ACTIONS exmaple:
    // {
    //     type: "ADDTODO"
    //     payload: 1
    // },
    // {
    //     type: "REMOVETODO"
    //     payload: 10
    // }
    switch(action.type) {
        
        case "ADDTODO":
            return {            // immutability here ~
                ...state,
                age: state.age + 1  // DONT DO: return state.age = state.age + 1, this will overwrite the previous state obj
            }

        case "REMOVETODO":
            return {
                ...state,
                age: state.age - action.payload // this will return 10(init age) - 10(action.payload of removotodo)
            }

        case "todolist":
            return {
                ...state,
                age: state.age - 1
            }

        default: 
            return state;
    }
}

// ACTION: an obj define which type that reducer will follow, payload is like new value
const INCREMENT = {
    type: "todolist",  // the reducer will check this to do logic
    payload: 1  // optional, if u want to add somehting to state then give payload some value, else it can be empty
}

const REMOVETODO = {
    type: "REMOVETODO",  // the reducer will check this to do logic
    payload: 3  // optional, if u want to add somehting to state then give payload some value, else it can be empty
}
// ACTION CREATORs: a function that create an action
// this help us reduce the action obj declaration
const INCREMENTcreator = (data) => {
    return {
        type: "ADDTODO",
        payload: data
    };
} 
INCREMENTcreator(10) 

// DISPATCH: a func that update the store, its argument is the obj action that we define above
// dispatch is the link between reducer and action for them to work
// use dispacth after an event in UI, like when user click someshiet, we call dispatch of that shiet or dispatch(shiet)
const dispatch = (e) => console.log(e) // example only
dispatch(INCREMENT)                       // Useage
dispatch(INCREMENTcreator(20))            // Useage