let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CATEGORY_CREATE':
      return [...state, payload];

    case 'CATEGORY_UPDATE':
      return state.map( category => {
        if (category.id === payload.id){
          return payload;
        } else {return category} 
      });

    case 'CATEGORY_DESTROY':
      return state.filter(category => {return category.id !== payload.id; });

    default: return state;
  }
}