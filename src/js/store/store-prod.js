import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../rootReducer';

const enhancer = compose(
  applyMiddleware(thunk),
);

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );
  return store;
};
