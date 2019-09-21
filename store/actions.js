import {DECREMENT, INCREMENT, ADD_MORE} from './actionTypes';

export const decrement = {
  type: DECREMENT,
};

export const increment = {
  type: INCREMENT,
};
export const addMore = count => {
  return {
    type: ADD_MORE,
    payload: count,
  };
};
