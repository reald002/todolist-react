import FilterBtn from "./filter-btn";
import './index.css';

function Filters(props) {
    const filters = [
        {text: 'All'},
        {text: 'Active'},
        {text: 'Completed'}
    ];

    const handleRadioChange = (e) => {
        let value;
        switch(e.target.value) {
            case 'Active': {
                value = false;
                break;
            }
            case 'Completed': {
                value = true;
                break;
            }
            default: {
                value = e.target.value;
            }
        }
        props.onRadioChange(value);
    }

    const handleClearBtnClick = () => {
        props.onClearBtnClick();
    }

    const getUncheckedTodosLength = () => {
        return props.data.filter(e => !e.checked).length;
    }

    return (
        <div className="filters">
            <div className='items-left filters__item'>
                { getUncheckedTodosLength() > 0 ? `${getUncheckedTodosLength()} item${getUncheckedTodosLength() > 1 ? 's' : ''} left` : ''}
            </div>
            <div onChange={handleRadioChange} className="filter-buttons filters__item">
                {filters.map((e, id) => <FilterBtn key={id} text={e.text} checked={e.checked} id={id}/>)}
            </div>
            <div onClick={handleClearBtnClick} className="clear-completed-btn filters__item">{props.data?.filter(e => e.checked === true).length > 0 ? 'Clear completed' : ''}</div>
        </div>
    );
}

export default Filters;
