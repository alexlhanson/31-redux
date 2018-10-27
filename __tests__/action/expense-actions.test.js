import { expenseCreate, expenseDestroy, expenseUpdate } from '../../src/action/expense-actions';

describe('expenseCreate action', () => {
  let mockExpense = {
    title: "pizza",
    budget: 500000,
    categoryId: 1,
  };

  test('should show that expenseCreate returns an object', () => {
    let actual = expenseCreate(mockExpense);
    expect(typeof actual).toBe('object');
  });

  test('should show that expenseCreate has title, budget, id and timestamp', () => {
    let actual = expenseCreate(mockExpense);

    expect(actual.payload.title).toBeDefined();
    expect(actual.payload.budget).toBeDefined();
    expect(actual.payload.id).toBeDefined();
    expect(actual.payload.timestamp).toBeDefined();
    expect(actual.payload.categoryId).toBeDefined();

  });

});

describe('expenseUpdate action', () => {
  let mockExpense = {
    title: "pizza",
    budget: 500000,
    id: 1,
    timestamp: "today",
    categoryId: 1
  };

  test('should show that expenseUpdate returns Object', () => {
    let actual = expenseUpdate(mockExpense);
    expect(typeof actual).toBe('object');
  });

  test('should show that expenseUpdate has title, budget, id and timestamp', () => {
    let actual = expenseUpdate(mockExpense);

    expect(actual.payload.title).toBeDefined();
    expect(actual.payload.budget).toBeDefined();
    expect(actual.payload.id).toBeDefined();
    expect(actual.payload.timestamp).toBeDefined();
    expect(actual.payload.categoryId).toBeDefined();

  });

});

describe('expenseDestroy action', () => {
  let mockExpense = {
    title: "pizza",
    budget: 500000,
    id: 1,
    timestamp: "today",
    categoryId: 1,
  };

  test('should show that expenseDestroy returns Object', () => {
    let actual = expenseDestroy(mockExpense);
    expect(typeof actual).toBe('object');
  });

  test('should show that expenseDestroy has title, budget, id and timestamp', () => {
    let actual = expenseDestroy(mockExpense);

    expect(actual.payload.title).toBeDefined();
    expect(actual.payload.budget).toBeDefined();
    expect(actual.payload.id).toBeDefined();
    expect(actual.payload.timestamp).toBeDefined();
    expect(actual.payload.categoryId).toBeDefined();

  });

});