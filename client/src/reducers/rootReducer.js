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


const rootReducter = (state = initialState, action) => {
  return state;
};

export default rootReducter;