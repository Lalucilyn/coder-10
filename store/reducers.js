import {INCREMENT, DECREMENT} from './actionTypes'

const initialState = {
  counter: 0,
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return initialState
  }
}

export default rootReducer
