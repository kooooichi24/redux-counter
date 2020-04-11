export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export function increment(number) {
  return dispatch => {
    dispatch({
      type: INCREMENT,
      payload: number
    })
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}