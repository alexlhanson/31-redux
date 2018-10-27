import { categoryCreate, categoryDestroy, categoryUpdate } from '../../src/action/category-actions';

describe('categoryCreate action', () => {
  let mockCategory = {
    title: "pizza",
    budget: 500000,
  };

  test('should show that categoryCreate returns an object', () => {
    let actual = categoryCreate(mockCategory);
    expect(typeof actual).toBe('object');
  });

  test('should show that categoryCreate has title, budget, id and timestamp', () => {
    let actual = categoryCreate(mockCategory);

    expect(actual.payload.title).toBeDefined();
    expect(actual.payload.budget).toBeDefined();
    expect(actual.payload.id).toBeDefined();
    expect(actual.payload.timestamp).toBeDefined();
  });

});

describe('categoryUpdate action', () => {
  let mockCategory = {
    title: "pizza",
    budget: 500000,
    id: 1,
    timestamp: "today"
  };

  test('should show that categoryUpdate returns Object', () => {
    let actual = categoryUpdate(mockCategory);
    expect(typeof actual).toBe('object');
  });

  test('should show that categoryUpdate has title, budget, id and timestamp', () => {
    let actual = categoryUpdate(mockCategory);

    expect(actual.payload.title).toBeDefined();
    expect(actual.payload.budget).toBeDefined();
    expect(actual.payload.id).toBeDefined();
    expect(actual.payload.timestamp).toBeDefined();
  });

});

describe('categoryDestroy action', () => {
  let mockCategory = {
    title: "pizza",
    budget: 500000,
    id: 1,
    timestamp: "today"
  };

  test('should show that categoryDestroy returns Object', () => {
    let actual = categoryDestroy(mockCategory);
    expect(typeof actual).toBe('object');
  });

  test('should show that categoryDestroy has title, budget, id and timestamp', () => {
    let actual = categoryDestroy(mockCategory);

    expect(actual.payload.title).toBeDefined();
    expect(actual.payload.budget).toBeDefined();
    expect(actual.payload.id).toBeDefined();
    expect(actual.payload.timestamp).toBeDefined();
  });

});