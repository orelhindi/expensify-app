import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expenses List</h1>
        {props.expenses.length > 0 ? props.expenses.map(expense => {
            return <ExpenseListItem {...expense} key={expense.id} />
        }) : <p> No Expenses</p>}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
};


export default connect(mapStateToProps)(ExpenseList);