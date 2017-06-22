import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../rootReducer';

const history = createHistory();
const middleware = routerMiddleware(history);

const enhancer = compose(
  applyMiddleware(thunk, middleware),
);

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );
  return store;
};

export { history };
