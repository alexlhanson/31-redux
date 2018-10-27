import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/index';
import logger from '../lib/middleware/logger';
import {expenseValidator, categoryValidator} from '../lib/middleware/validators';

export default () => createStore(reducer, applyMiddleware(
  logger,
  expenseValidator,
  categoryValidator
));