import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import 'jest';


Enzyme.configure({ adapter: new Adapter });
import ExpenseForm from '../../src/component/expense-form/index';

describe('expense form', () => {

  test('should show changes on title input', () => {
    let onChange = sinon.spy(ExpenseForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<ExpenseForm />)
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
    let onChange = sinon.spy(ExpenseForm.prototype, 'handleChange');
    let wrapper = Enzyme.shallow(<ExpenseForm />)
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