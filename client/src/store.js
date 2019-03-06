const { createStore } = 'redux';
//import rootReducer from './reducers/rooteReducer';

const initialState = {
  module_visible: false,
  current: null,
  current_data: null,
  id: null,
  fname: null,
  lname: null,
  phone: null,
  appointments: [
    {id: 'nine'},
    {id: 'ten'},
    {id: 'eleven'},
    {id: 'tweleve'},
    {id: 'one'},
    {id: 'two'},
    {id: 'three'},
    {id: 'four'}
  ]
};

//would get data from database for complete application to pass myreducer
function myreducer(state = initialState, action) {
  if(action.type == 'OPEN_MODAL') {
    return {
      ...state,
      modal_visiblity: true
    }
  }
}
store.subscribe(() => {
  console.log(store.getState());
})
const openModal = {type: 'OPEN_MODAL'}

store.dispatch(todoAction)

const store = createStore(myReducer);


