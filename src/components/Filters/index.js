import FilterBtn from "./filter-btn";
import './index.css';

function Filters(props) {
    const filters = [
        {text: 'All'},
        {text: 'Active'},
        {text: 'Completed'}
    ];

    const handleRadioChange = (e) => {
        const value = e.target.value === 'Active' ? false : e.target.value === 'Completed' ? true : e.target.value;
        props.onRadioChange(value);
    }

    const handleClearBtnClick = () => {
        props.onClearBtnClick();
    }

    return (
        <div className="filters">
            <div className='items-left filters__item'>
                {props.data.filter(e => !e.checked).length > 0 ? `${props.data?.filter(e => !e.checked).length} item${props.data?.filter(e => !e.checked).length > 1 ? 's' : ''} left` : ''}
            </div>
            <div onChange={handleRadioChange} className="filter-buttons filters__item">
                {filters.map((e, id) => <FilterBtn key={id} text={e.text} checked={e.checked} id={id}/>)}
            </div>
            <div onClick={handleClearBtnClick} className="clear-completed-btn filters__item">{props.data?.filter(e => e.checked === true).length > 0 ? 'Clear completed' : ''}</div>
        </div>
    );
}

export default Filters;
