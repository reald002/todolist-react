function FilterBtn({id, text}) {
    return (
        <span>
            <input defaultChecked={id === 0 ? 'checked': ''} id={`filter-${id}`} value={text} className="filter-radio" name="filter-radio" type="radio"/>
            <label className="filter-btn" htmlFor={`filter-${id}`}>{text}</label>
        </span>
    );
}

export default FilterBtn;
