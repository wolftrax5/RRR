import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import example from '../redux/example/exampleReducer';

const reducersApp = combineReducers({
  example,
  routing: routerReducer
});

export default reducersApp;
