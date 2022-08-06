import './styles/Todo.scss'
import SearchBar from './Search';
import Filter from './Filter';
import AddToDo from './AddToDo';

function Todo() {
    return (
        <div className="todo">
            <h1 className="todo__title">TODO APP</h1>
            <div className="todo__search"> <SearchBar/> </div>
            <div className="todo__filter"> <Filter/> </div>
            <div className="todo__add"> <AddToDo/> </div>
        </div>
    )
}

export default Todo;