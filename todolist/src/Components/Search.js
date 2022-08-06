import "./styles/Search.scss"
import { useDispatch } from 'react-redux'
import { useState, useRef } from 'react'
import { searchTask } from "../redux/actions";

function SearchBar() {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const aim = useRef();

    const handleInput = (e) => {
        setSearch(e.target.value);
        dispatch(searchTask(e.target.value));
    }

    const handleClick = () => {
        dispatch(searchTask(search));
    }

    return (
        <div className='search'>
            <p className='search__title'>Search task:</p>
            <input 
                className='search__input' 
                type="text" 
                ref={aim}
                value={search}
                onChange={handleInput}
            />
            <span onClick={handleClick} className='search__icon'><i className='bx bx-search'></i></span>
        </div>
    )
}

export default SearchBar;