import {Component} from "react";
import FilterBtn from "./Filter-btn";
import './Filters.css';

class Filters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: [
                { text: 'All' },
                { text: 'Active' },
                { text: 'Completed' }
            ]
        }
    }

    handleRadioChange = (e) => {
        const value = e.target.value === 'Active' ? false : e.target.value === 'Completed' ? true : e.target.value;
        this.props.onRadioChange(value);
    }

    handleClearBtnClick = () => {
        this.props.onClearBtnClick();
    }

    render() {
        return (
            <div className="filters">
                <div className='items-left filters__item'>
                    {this.props.data?.length > 0 ? `${this.props.data?.length} item${this.props.data?.length > 1 ? 's' : ''} left` : ''}
                </div>
                <div onChange={this.handleRadioChange} className="filter-buttons filters__item">
                    {this.state.filters.map((e, id) => <FilterBtn key={id} text={e.text} checked={e.checked} id={id}/>)}
                </div>
                <div onClick={this.handleClearBtnClick} className="clear-completed-btn filters__item">{this.props.data?.filter(e => e.checked === true).length > 0 ? 'Clear completed' : ''}</div>
            </div>
        );
    }
}

export default Filters;
