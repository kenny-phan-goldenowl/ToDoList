import './styles/Filter.scss'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { statusFilter } from '../redux/actions';

function Filter() {

    const dispatch = useDispatch();
    const [tick, setTick] = useState(1);

    const handleChange = (e) => {
        setTick(e)
        if (e === 1) dispatch(statusFilter("All"))
        if (e === 2) dispatch(statusFilter("Done"))
        if (e === 3) dispatch(statusFilter("Wip"))
    }

    return (
        <div className="filter">
            <h4>Filter by status:</h4>
            <div className="filter__type">
                <div><input id='all' type="radio" onChange={() => handleChange(1)} checked={tick === 1} /><label htmlFor='all'>All</label></div>
                <div><input id='done' type="radio" onChange={() => handleChange(2)} checked={tick === 2} /><label htmlFor='done'>Done</label></div>
                <div><input id='wip' type="radio" onChange={() => handleChange(3)} checked={tick === 3} /><label htmlFor='wip'>Wip</label></div>
            </div>
        </div>
    )
}

export default Filter;