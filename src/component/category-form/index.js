import React from 'react';
import uuid from 'uuid';

export default class CategoryForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {  
      id: props.category ? props.category.id: uuid.v4(),
      title: props.category ? props.category.title: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleComplete = this.handleComplete.bind(this);

  }

  handleChange(){
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
  };

  handleComplete(){

  }

  render(){
    return (
      <div>
        <form id="category-form"> onSubmit={this.handleComplete}
        <label>
            Title:
            <input type="text" name="category" value={this.state.category} placeholder="Category" onChange={this.handleChange}/>
          </label>
          <label>
            Content:
            <input type="text" name="budget" value={this.state.budget} placeholder="Budget" onChange={this.handleChange}/>
          </label>
          <button type="submit">Add Item</button>
        </form>
      </div>
    )
  }
}