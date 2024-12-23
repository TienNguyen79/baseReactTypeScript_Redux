/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

import { InjectedReducersType } from 'utils/types/injector-typings';
import testReducer from './test/TestSlice';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export const rootReducers = {
  test: testReducer,
};

export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  if (Object.keys(injectedReducers).length === 0) {
    return (state: any) => state;
  } else {
    return combineReducers({
      ...injectedReducers,
    });
  }
}
