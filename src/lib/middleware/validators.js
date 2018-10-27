export const categoryValidator = store => next => action => {
  let actionType = action.type.split('_');
  if (actionType[0] === 'CATEGORY'){
    try{
      console.log(action);

      let result = next(action);

      if (!action.payload.title) {throw new Error('no title provided')}
      else if (!action.payload.budget) {throw new Error('no budget provided')}
      else if (!action.payload.id) {throw new Error('no id provided')}

      return result;
    } catch (err) {
      err.action = action
      throw err;
    }
  }
  return next(action);
}

export const expenseValidator = store => next => action => {
  let actionType = action.type.split('_');
  if (actionType[0] === 'EXPENSE'){
    try{
      let result = next(action);

      if (!action.payload.title) {throw new Error('no title provided')}
      else if (!action.payload.budget) {throw new Error('no budget provided')}
      else if (!action.payload.id) {throw new Error('no id provided')}

      return result;
    } catch (err) {
      err.action = action
      throw err;
    }
  }
  return next(action);
}