/* eslint-disable */
import DevStore, { history as devHistory} from './store-dev';
import ProdStore, { history as prodHistory} from './store-prod';

let store = null;
let history = null
if (ENVIRONMENT === 'local') {
  store = DevStore;
  history = devHistory;
} else {
  store = ProdStore;
  history = prodHistory;
}

export default store;
export { history };
