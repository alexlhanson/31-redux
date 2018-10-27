import React from 'react';

export default class ExpenseForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: props.expense ? props.expense.title : '',
      budget: props.expense ? props.expense.budget : '',
      id: props.expense ? props.expense.id : '',
      timestamp: props.expense ? props.expense.timestamp : '',
      categoryId: props.categoryId ? props.categoryId : null,
      
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.onComplete(Object.assign({}, this.state));
  };

  render() {
    return (
      <div>
        <form id="expense-form" onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="title" value={this.state.title} placeholder="Expensed Item" onChange={this.handleChange} />
          </label>
          <label>
            <input type="text" name="budget" value={this.state.budget} placeholder="$ Amount" onChange={this.handleChange} />
          </label>
          <button type="submit">{this.props.buttonText}</button>
        </form>
      </div>
    )
  }
}