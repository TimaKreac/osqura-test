import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import reducers from './reducers';

axios.defaults.baseURL = 'https://lumus.wistis.ru/api/v1';

const token = localStorage.getItem('token');

if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const rootReducer = combineReducers(reducers);

const middlewares = [thunk, logger];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
