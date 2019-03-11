import { combineReducers } from 'redux';
import appointmentsReducer from './appointmentsReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  appointmentsReducer: appointmentsReducer,
  form: formReducer
});

export default rootReducer;