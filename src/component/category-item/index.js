import React from 'react';
import ExpenseForm from '../expense-form/';
import Dropzone from '../dropzone/';


export default class CategoryItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.handleDropZoneComplete = this.handleDropZoneComplete.bind(this);
  }

  handleClick() {
    this.props.destroy(this.props.category);
  }

  handleDropZoneComplete(err, item) {
    if (err) { return console.error() }
    console.log(item);
    this.props.expenseDestroy(item);

    item.categoryId = this.props.category.id
    this.props.expenseCreate(item);
  }

  render() {
    return (
      <div id="category-item">
        <Dropzone onComplete={this.handleDropZoneComplete}>
          <button id="delete-button" onClick={this.handleClick}>x</button>
          <h4>{this.props.category.title}</h4>
          <h5>${this.props.category.budget}</h5>
          <h6>{this.props.category.timestamp.toString()}</h6>
          {this.props.children}
        </Dropzone>
      </div>
    )
  }
}