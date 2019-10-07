import { combineReducers } from 'redux';
import scoreReducer from './score-reducer';
import getBiggerReducer from './getbigger-form-reducer';

const rootReducer = combineReducers({
  scoreReducer,
  getBiggerReducer,
});

export default rootReducer;