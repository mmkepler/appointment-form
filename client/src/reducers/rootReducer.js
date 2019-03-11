import { combineReducers } from 'redux';
import appointmentsReducer from './appointmentsReducer';

const rootReducer = combineReducers({
  appointmentsReducer: appointmentsReducer,
});

export default rootReducer;