import uuid from 'uuid/v4';

export const categoryCreate = category => {
  category.id = uuid();
  category.timestamp = new Date();

  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  }
};

export const categoryUpdate = category => {
  console.log('updating', category);
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  }
};

export const categoryDestroy = category => {
  console.log('destroying', category);
  
  return {
    type: 'CATEGORY_DESTROY',
    payload: category,
  }
}