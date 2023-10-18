import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import moneyReducer from './moneyReducer';
import isVisibleReducer from './isVisibleReducer';

const rootReducer = combineReducers({ counter: counterReducer, isVisible: isVisibleReducer, money: moneyReducer });

export default rootReducer;
