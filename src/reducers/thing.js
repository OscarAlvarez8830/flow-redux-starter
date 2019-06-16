/* @flow */
import type {Action} from 'types';

type ThingState = {};

const initialState: ThingState = {};

export default (state: ThingState = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
