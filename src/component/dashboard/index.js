import React from 'react';
import { connect } from 'react-redux';
import { categoryCreate, categoryUpdate, categoryDestroy } from '../../action/category-actions';
import { expenseCreate, expenseUpdate, expenseDestroy } from '../../action/expense-actions';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import Draggable from '../draggable';


class DashboardContainer extends React.Component {

  componentDidMount() {
    console.log('__Dashboard__', this);
  }

  _expenseItemMap(categoryId) {
    return this.props.expenses[categoryId].map(expense => {
      return <li key={expense.id} >
        <Draggable dataTransferItem={expense}>
          <ExpenseItem id="expense-item" expense={expense} destroy={this.props.expenseDestroy} categoryId={categoryId}>
            <ExpenseForm id="expense-form" buttonText="Update" categoryId={categoryId} onComplete={this.props.expenseUpdate} expense={expense} />
          </ExpenseItem>
        </Draggable>
      </li>
    })
  }

  render() {


    return (
      <main id="dashboard-container">
        <h2>Dashboard</h2>
        <p>Budget Tracker helps you to set budgets and track your expenses.  Categories for your budget and expense items can be created with in-line forms and expenses can be dragged and dropped between categories.</p>
        <CategoryForm id="category-form" buttonText='Create' onComplete={this.props.categoryCreate} />
        <h3>Budget Categories</h3>
        <ul>
          {this.props.categories.map(category => {
            return <li key={category.id}>
              <CategoryItem id="category-item" category={category} destroy={this.props.categoryDestroy} expenseDestroy={this.props.expenseDestroy} expenseCreate={this.props.expenseCreate}>
                <CategoryForm id ="category-form" buttonText="Update" category={category} onComplete={this.props.categoryUpdate} />
                <ExpenseForm id="expense-form" buttonText='Create' onComplete={this.props.expenseCreate} expenses={this.props.expenses[category.id]} categoryId={category.id} />
                <ul>{this._expenseItemMap(category.id)}</ul>
              </CategoryItem>
            </li>
          })}
        </ul>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    expenses: state.expenses,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDestroy: category => dispatch(categoryDestroy(category)),
    expenseCreate: expense => dispatch(expenseCreate(expense)),
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
    expenseDestroy: expense => dispatch(expenseDestroy(expense)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);