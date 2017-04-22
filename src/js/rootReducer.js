import { combineReducers } from 'redux';

const ADD_TODO = 'ADD_TODO';
const initialState = [{
  text: 'hello',
}];

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  test: todos,
});