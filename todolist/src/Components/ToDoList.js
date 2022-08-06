import './styles/ToDoList.scss'
import { useSelector } from 'react-redux'
import { result } from '../redux/selectors'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/actions';

function ToDoList() {

    const dispatch = useDispatch();
    const items = useSelector(result);

    return (
        <div className="result">
            <h2>Tasks: </h2>
            <br/>
            {items.map((item, index) => (
                <li key={index}>
                    <input 
                        onChange={()=> item.completed = !item.completed}
                        style={{width: 30, height: 30}} 
                        type="checkbox"
                    />
                    <span>{item.name}</span>
                    <span onClick={() => dispatch(removeTodo(index))} className="result__icon"><i className='bx bx-trash'></i></span>
                </li>
            ))}
        </div>
    )
}

export default ToDoList;