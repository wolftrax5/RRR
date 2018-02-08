import reducer from '../exampleReducer'
import * as exampleActionTypes from '../exampleActionTypes'

describe('Example reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        hello: '',
        planet: '',
      }
    )
  })

  it('should handle EXAMPLE_GET_BLABLA', () => {
  expect(
    reducer({hello:'hi', planet:'mart'},'EXAMPLE_GET_BLABLA')
  ).toEqual({
      hello: 'hi',
      planet: 'mart',
    })
  })
})
