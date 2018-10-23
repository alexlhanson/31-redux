import React from 'react';
import { connect } from 'react-redux';
import { categoryCreate, categoryUpdate, categoryDestroy } from '../../action/category-actions';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {

  componentDidMount() {
    console.log('__Dashboard__', this);
  }

  render() {

    return (
      <main id="dashboard-container">
        <h2>Dashboard</h2>
        <CategoryForm buttonText='Create' onComplete={this.props.categoryCreate} />
        <h3>Budget Items</h3>
        <ul>
          {this.props.categories.map(category => {
            return <li key={category.id}>
              <CategoryItem category={category} destroy={this.props.categoryDestroy}>
                <CategoryForm buttonText="Update" category={category} onComplete={this.props.categoryUpdate}/>
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
    categories: state,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDestroy: category => dispatch(categoryDestroy(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);