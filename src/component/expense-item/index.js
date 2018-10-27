import React from 'react';

export default class ExpenseForm extends React.Component {

  constructor(props) {
    super(props)
    

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.destroy(this.props);
  }

  render() {
    return (
      <div id="expense-item">
        <button id="delete-button" onClick={this.handleClick}>x</button>
        <h4>{this.props.expense.title}</h4>
        <h5>${this.props.expense.budget}</h5>
        <h6>{this.props.expense.timestamp.toString()}</h6>
        {this.props.children}
      </div>
    )
  }
}