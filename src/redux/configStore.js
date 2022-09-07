import { createStore, combineReducers } from 'redux';

import { Reducer } from './reducers/Reducer';

const rootReducer = combineReducers({ Reducer });

export const store = createStore(rootReducer);
