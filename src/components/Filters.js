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
                    {this.props.data.length > 0 ? `${this.props.data.length} item${this.props.data.length > 1 ? 's' : ''} left` : ''}
                </span>
                <div className="filter-buttons">
                    <button className="filter-btn">All</button>
                    <button className="filter-btn">Active</button>
                    <button className="filter-btn">Completed</button>
                </div>
                <span className="clear-completed-btn">{this.props.data.filter(e => e.checked === true).length > 0 ? 'Clear completed' : ''}</span>
            </div>
        );
    }
}

export default Filters;
