import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../rootReducer';
import DevTools from '../DevTool/DevTool';

const enhancer = compose(
  DevTools.instrument(),
  applyMiddleware(thunk)
);

export default initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );
  return store;
};
