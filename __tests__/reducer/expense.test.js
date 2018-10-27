import expenseReducer from '../../src/reducer/expense';

describe('expenseReducer', () => {

  test('should show that no action causes initial state return', () => {
    let mockAction = {
      type: '',
      payload: 'payload',
    }
    let actual = expenseReducer([], mockAction);
    expect(actual).toEqual([]);
  });

  test('should show that CATEGORY_CREATE action returns object with key of id and array value', () => {
    let mockAction = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: "id"
      },
    }
    let actual = expenseReducer([], mockAction);
    expect(actual).toEqual({ id: [] });
  })

  test('should show that CATEGORY_DESTROY action removes category array', () => {
    let mockAction = {
      type: 'CATEGORY_DESTROY',
      payload: {
        id: "id"
      },
    }
    let mockState = { id: [] }
    let actual = expenseReducer([], mockAction);
    expect(actual).toEqual({});
  })

  test('should show that EXPENSE_CREATE action returns array an expense inside', () => {
    let mockAction = {
      type: 'EXPENSE_CREATE',
      payload: {
        budget: 500,
        categoryId: 'id',
        id: 'expenseId',
        title: 'expense',
      }
    }
    let mockState = { id: [] }

    let actual = expenseReducer(mockState, mockAction);
    expect(actual.id[0].id).toBe('expenseId');
  });

  test('should show that EXPENSE_UPDATE action returns state with updated budget', () => {
    let mockAction = {
      type: 'EXPENSE_UPDATE',
      payload: {
        budget: 500,
        categoryId: 'id',
        id: 'expenseId',
        title: 'expense',
      }
    }
    let mockState = { id: [{
      budget: 1000,
      categoryId: 'id',
      id: 'expenseId',
      title: 'expensed',
    }] }

    let actual = expenseReducer(mockState, mockAction);
    expect(actual.id[0].budget).toBe(500);
  });

  test('should show that EXPENSE_UPDATE with wrong id action returns state with original budget', () => {
    let mockAction = {
      type: 'EXPENSE_UPDATE',
      payload: {
        budget: 500,
        categoryId: 'id',
        id: 'expenseId2',
        title: 'expense',
      }
    }
    let mockState = { id: [{
      budget: 1000,
      categoryId: 'id',
      id: 'expenseId',
      title: 'expensed',
    }] }

    let actual = expenseReducer(mockState, mockAction);
    expect(actual.id[0].budget).toBe(1000);
  });

  test('should show that EXPENSE_DESTROY action returns state with updated budget', () => {
    let mockAction = {
      type: 'EXPENSE_DESTROY',
      payload: {
        budget: 500,
        categoryId: 'id',
        id: 'expenseId',
        title: 'expense',
      }
    }
    let mockState = { id: [{
      budget: 500,
      categoryId: 'id',
      id: 'expenseId',
      title: 'expensed',
    }] }

    let actual = expenseReducer(mockState, mockAction);
    expect(actual).toEqual({'id': []});
  });

});