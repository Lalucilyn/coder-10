import {INCREMENT, DECREMENT, ADD_MORE} from './actionTypes';

const initialState = {
  counter: 0,
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case ADD_MORE:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return initialState;
  }
};

export default rootReducer;
