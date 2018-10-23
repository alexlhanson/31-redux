import React from 'react';

export default class CategoryItem extends React.Component{
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.destroy(this.props.category);
  }

  render() {
    return(
      <div id="category-item">
        <button id="delete-button" onClick={this.handleClick}>x</button>
        <h4>{this.props.category.title}</h4>
        <h5>${this.props.category.budget}</h5>
        <h6>{this.props.category.timestamp.toString()}</h6>
        {this.props.children}
      </div>
    )
  }
}