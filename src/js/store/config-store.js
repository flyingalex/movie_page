/* eslint-disable */
import DevStore from './store-dev';
import ProdStore from './store-prod';

let store = null;
if (ENVIRONMENT === 'local') {
  store = DevStore;
} else {
  store = ProdStore;
}

export default store;
