import {useDispatch} from 'react-redux'
import './styles/AddToDo.scss'
import ToDoList from './ToDoList';
import {addTodo} from '../redux/actions'
import { useState, useRef } from 'react';

function AddToDo() {

    const dispatch = useDispatch();
    const [todoName, setTodoName] = useState('');
    const aim = useRef();

    const handleInput = (e) => {
        setTodoName(e.target.value)
    }

    const handleClick = () => {
        // dispatch()
        if (todoName) {
            dispatch(addTodo({
                name: todoName,
                completed: false
            }))
            setTodoName("")
            aim.current.focus()
        }
    }

    return (
        <div>
            <ToDoList/>
            <div className="addtodo">
                <input 
                    ref={aim}
                    type="text"
                    value={todoName}
                    onChange={handleInput}
                />
                <button onClick={handleClick}>Add</button>
            </div>
        </div>
    )
}

export default AddToDo;