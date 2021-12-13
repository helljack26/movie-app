import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import todos from './todos/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers( { queryInput } ),
  composeEnhancers( applyMiddleware() ),
);

export default store;
