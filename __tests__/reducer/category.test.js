import categoryReducer from '../../src/reducer/category';

describe('categoryReducer', () => {

  test('should show that no action causes initial state return', () => {
    let mockAction = {
      type: '',
      payload: 'payload',
    }
    let actual = categoryReducer([], mockAction);
    expect(actual).toEqual([]);
  });

  test('should show that CATEGORY_CREATE action returns array with payload', () => {
    let mockAction = {
      type: 'CATEGORY_CREATE',
      payload: 'payload',
    }
    let actual = categoryReducer([], mockAction);
    expect(actual[0]).toBe('payload');
  });

  test('should show that CATEGORY_UPDATE action returns update of state', () => {
    let mockState = [
      {
        title: "mockTitle",
        budget: "mockBudget",
        id: "mockId",
        timestamp: 'today',
      }
    ]
    let mockAction = {
      type: 'CATEGORY_UPDATE',
      payload: {
        title: "mockTitle",
        budget: "mockBudget v2",
        id: "mockId",
        timestamp: 'today',
      },
    }
    let actual = categoryReducer(mockState, mockAction);
    expect(actual[0].budget).toBe('mockBudget v2');
  });

  test('should show that CATEGORY_UPDATE action returns original state if no matching id', () => {
    let mockState = [
      {
        title: "mockTitle",
        budget: "mockBudget",
        id: "mockId",
        timestamp: 'today',
      }
    ]
    let mockAction = {
      type: 'CATEGORY_UPDATE',
      payload: {
        title: "mockTitle",
        budget: "mockBudget v2",
        id: "mockId2",
        timestamp: 'today',
      },
    }
    let actual = categoryReducer(mockState, mockAction);
    expect(actual[0].budget).toBe('mockBudget');
  });

  test('should show that CATEGORY_DESTROY action removes mock item from state', () => {
    let mockState = [
      {
        title: "mockTitle",
        budget: "mockBudget",
        id: "mockId",
        timestamp: 'today',
      }
    ]
    let mockAction = {
      type: 'CATEGORY_DESTROY',
      payload: {
        title: "mockTitle",
        budget: "mockBudget",
        id: "mockId",
        timestamp: 'today',
      },
    }
    let actual = categoryReducer(mockState, mockAction);
    expect(actual).toEqual([]);
  });

  test('should show that CATEGORY_DESTROY action does nothing if id in state not the same as payload', () => {
    let mockState = [
      {
        title: "mockTitle",
        budget: "mockBudget",
        id: "mockId",
        timestamp: 'today',
      }
    ]
    let mockAction = {
      type: 'CATEGORY_DESTROY',
      payload: {
        title: "mockTitle",
        budget: "mockBudget",
        id: "mockId v2",
        timestamp: 'today',
      },
    }
    let actual = categoryReducer(mockState, mockAction);
    expect(actual).toEqual(mockState);
  });

  

});