import React from "react";

function FilterBtn(props) {

    return (
        <span>
            <input defaultChecked={props.id === 0 ? 'checked': ''} id={`filter-${props.id}`} value={props.text} className="filter-radio" name="filter-radio" type="radio"/>
            <label className="filter-btn" htmlFor={`filter-${props.id}`}>{props.text}</label>
        </span>
    );
}

export default FilterBtn;
