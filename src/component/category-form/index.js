import React from 'react';

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.category ? props.category.title : '',
      budget: props.category ? props.category.budget : '',
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
    this.props.onComplete(Object.assign({}, this.state));
  };

  render() {
    return (
      <div>
        <form id="category-form" onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} placeholder="Category" onChange={this.handleChange} />
          </label>
          <label>
            Content:
            <input type="text" name="budget" value={this.state.budget} placeholder="Budget" onChange={this.handleChange} />
          </label>
          <button type="submit">{this.props.buttonText}</button>
        </form>
      </div>
    )
  }
}