function FilterBtn({index, text}) {
    return (
        <span>
            <input defaultChecked={index === 0 ? 'checked': ''} id={`filter-${index}`} value={text} className="filter-radio" name="filter-radio" type="radio"/>
            <label className="filter-btn" htmlFor={`filter-${index}`}>{text}</label>
        </span>
    );
}

export default FilterBtn;
