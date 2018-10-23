let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CATEGORY_CREATE':
      return {
        ...state,
        [payload.id]: [],
      }

    case 'CATEGORY_DELETE':
      let categoryState = state;
      delete categoryState[payload.id]
      return {...categoryState}

    case 'EXPENSE_CREATE':
      let category = state[payload.categoryId];
      {...state, [payload.categoryId]: [ ...category, payload]};

    case 'EXPENSE_DELETE':

    case 'EXPENSE_UPDATE':

    default: return state;
  }
}