import {Component} from "react";
import './Filters.css';

class Filters extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filters">
                <span className='items-left'>
                    {this.props.itemsCount > 0 ? `${this.props.itemsCount} item${this.props.itemsCount > 1 ? 's' : ''} left` : ''}
                </span>
                <div className="filter-buttons">
                    <button className="filter-btn">All</button>
                    <button className="filter-btn">Active</button>
                    <button className="filter-btn">Completed</button>
                </div>
            </div>
        );
    }
}

export default Filters;
