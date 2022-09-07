import { createStore, combineReducers } from 'redux';

import { Reducers } from './reducers/Reducer';

const rootReducer = combineReducers({ Reducers });

export const store = createStore(rootReducer);
