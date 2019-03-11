import initialState from './initialState';
import { MODAL_OPEN, MODAL_CLOSE, UPDATE_FIELDS, SUBMIT } from '../actions/formActions';

const appointmentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case MODAL_OPEN: {
      console.log("try" , action.payload);
      return {
        ...state,
        modal_visible: !state.modal_visible,
        id: action.payload.id,
        fname: action.payload.fname,
        lname: action.payload.lname,
        phone: action.payload.phone
      }
    }
    case MODAL_CLOSE: {
      //console.log('Inside Modal Toggle');
      return {
        ...state,
        modal_visible: !state.modal_visible,
        id: '',
        fname: '',
        lname: '',
        phone: ''
      }
    }
    case UPDATE_FIELDS: {
      console.log("inside modal Reducer update fields ", action.payload.target.value);
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      }
    }
    case SUBMIT: {
      console.log('insubmit ', action.payload);
      return {
        ...state,
        appointments: action.payload,
        modal_visible: !state.modal_visible,
        id: '',
        fname: '',
        lname: '',
        phone: ''
      }
    }
  default:
    return state;
  }
};

export default appointmentsReducer;