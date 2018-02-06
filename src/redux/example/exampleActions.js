import { createAction } from 'redux-actions';
import exapleActionType from './exampleActionTypes';
// function actions list 
export const saiHi = (greetings) => async dispatch => {
    dispatch(createAction(exapleActionType.EXAMPLE_GET_BLABLA)(greetings))
};
