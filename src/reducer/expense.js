let initialState = [];
let updatedState = null;

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
      return { ...categoryState }

    case 'EXPENSE_CREATE':
      let expenses = state[payload.categoryId];
      return { ...state, [payload.categoryId]: [...expenses, payload] };

    case 'EXPENSE_DESTROY':
      if (!payload.expense){payload.expense = {id: payload.id}};
      payload.expense.id = payload.id;
      let expensesList = state[payload.categoryId];

      updatedState = expensesList.filter(expense => { return expense.id !== payload.expense.id; });
      return { ...state, [payload.categoryId]: updatedState };

    case 'EXPENSE_UPDATE':
      updatedState = state[payload.categoryId].map(expense => {
        if (expense.id === payload.id) {
          return payload;
        } else { return expense }
      });
      return { ...state, [payload.categoryId]: updatedState };

    default: return state;
  }
}