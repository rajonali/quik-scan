import { combineReducers } from 'redux'
import user from './user';
import product from './product'
const reducers = combineReducers({
  user,
  product
});

export default reducers