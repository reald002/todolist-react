import FilterBtn from "./Filter-btn";
import './index.css';

function Filters(props) {
    const filters = [
        {text: 'All'},
        {text: 'Active'},
        {text: 'Completed'}
    ];

    const handleRadioChange = (e) => {
        props.onRadioChange(e.target.value);
    }

    const handleClearBtnClick = () => {
        props.onClearBtnClick();
    }

    const getUncheckedTodosLength = () => {
        return props.data.filter(e => !e.checked).length;
    }

    return (
        <div className="filters">
            <p className='items-left filters__item'>
                { getUncheckedTodosLength() > 0 ? `${getUncheckedTodosLength()} item${getUncheckedTodosLength() > 1 ? 's' : ''} left` : ''}
            </p>
            <div onChange={handleRadioChange} className="filter-buttons filters__item">
                {filters.map((e, index) => <FilterBtn key={index} text={e.text} checked={e.checked} index={index}/>)}
            </div>
            <button onClick={handleClearBtnClick} className="clear-completed-btn filters__item">{props.data?.filter(e => e.checked === true).length > 0 ? 'Clear completed' : ''}</button>
        </div>
    );
}

export default Filters;
