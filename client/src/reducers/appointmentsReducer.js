import { MODAL_OPEN, MODAL_CLOSE, UPDATE_FIELDS, SUBMIT, LOAD_INITIAL, POST_APPOINTMENTS  } from '../actions/formActions';

const appointmentsReducer = (state = [], action) => {
  switch(action.type) {
    case MODAL_OPEN: {
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
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      }
    }
    case SUBMIT: {
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
    case LOAD_INITIAL: {
      return {
        ...state,
        ...action.payload
      }
    }
    case POST_APPOINTMENTS: 
    return state;
  default:
    return state;
  }
};

export default appointmentsReducer;