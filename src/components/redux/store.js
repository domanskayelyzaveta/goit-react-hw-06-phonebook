import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { phoneBookReducer } from './phoneBookReducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

export const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
