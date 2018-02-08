import * as exampleActions from '../exampleActions';

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  return next(action)
}
const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn()

  const invoke = (action) => thunk(store)(next)(action)

  return {store, next, invoke}
};

it('passes through non-function action', () => {
  const { next, invoke } = create()
  const action = {type: 'EXAMPLE_GET_BLABLA'}
  invoke(action)
  expect(next).toHaveBeenCalledWith(action)
})

it('calls the function', () => {
  const { invoke } = create()
  const fn = jest.fn()
  invoke(fn)
  expect(fn).toHaveBeenCalled()
});

it('passes dispatch and getState', () => {
  const { store, invoke } = create()
  invoke((dispatch, getState) => {
    dispatch('EXAMPLE_GET_BLABLA')
    getState();
  })
  expect(store.dispatch).toHaveBeenCalledWith('EXAMPLE_GET_BLABLA')
  expect(store.getState).toHaveBeenCalled()
});

// it('sai Hi Action',() => {
//     dispatch(createAction('EXAMPLE_GET_BLABLA')(greetings))
//     expect(exampleActions.saiHi({hello:'lala', planet:'venus'}))
//       .toEqual(()=>{});
// });
