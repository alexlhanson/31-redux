let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CATEGORY_CREATE':
      return {
        ...state,
        [payload.id]: [],
      }

    case 'CATEGORY_DESTROY':
      let categoryState = state;
      delete categoryState[payload.id]
      return {...categoryState}

    case 'EXPENSE_CREATE':
      let expenses = state[payload.categoryId];
      return {...state, [payload.categoryId]: [ ...expenses, payload]};

    case 'EXPENSE_DESTROY':
      console.log(payload);
      let expensesList = state[payload.categoryId];

      return expensesList.filter(expenses => {return expenses.id !== payload.expense.id; });


    case 'EXPENSE_UPDATE':


    default: return state;
  }
}