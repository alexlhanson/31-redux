import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';


Enzyme.configure({ adapter: new Adapter });
import CategoryForm from '../../src/component/category-form/index';

describe('category form', () => {

  test('should show changes on title input', () => {
    let onChange = sinon.spy(CategoryForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<CategoryForm />)
    const event = { target : {
        name: 'title',
        value: 'value'
      }
    }

    wrapper.find('input[name="title"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  });

  test('should show changes on budget input', () => {
    let onChange = sinon.spy(CategoryForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<CategoryForm />)
    const event = { target : {
        name: 'title',
        value: 'value'
      }
    }

    wrapper.find('input[name="budget"]').simulate('change', event);

    expect(onChange.callCount).toBe(1);
    onChange.restore();
  });
});