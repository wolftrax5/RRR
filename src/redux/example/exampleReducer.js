import { handleActions } from 'redux-actions';
import exampleActionTypes from './exampleActionTypes';

const initialState = {
  hello: '',
  planet: '',
};

export default handleActions({
  [exampleActionTypes.EXAMPLE_GET_BLABLA]:(state, {payload, error }) => {

    const newState = Object.assign({}, state);

    newState.hello = payload.hello;
    newState.planet = payload.planet;

    return newState;
  },

}, initialState);
