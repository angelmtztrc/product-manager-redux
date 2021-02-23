import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// reducer
import reducer from '../reducers';

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) ||
  compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
