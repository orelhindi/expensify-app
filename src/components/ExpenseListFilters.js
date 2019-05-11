import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import uuid from 'uuid';

class ExpenseListFilters extends Component {

    state = {
        focused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (focused) => {
        this.setState(() => ({ focused }))
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input className="text-input" type="text" value={this.props.filters.text} onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.currentTarget.value))
                        }} />
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filters.sortBy} onChange={(e) => {
                            if (e.currentTarget.value === 'date') {
                                this.props.dispatch(sortByDate())
                            } else if (e.currentTarget.value === 'amount') {
                                this.props.dispatch(sortByAmount())
                            }
                        }}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                            startDate={this.props.filters.startDate}
                            startDateId={uuid()}
                            endDate={this.props.filters.endDate}
                            endDateId={uuid()}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.focused}
                            onFocusChange={this.onFocusChange}
                        /></div>
                </div>



            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);