import {applyMiddleware , createStore} from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducers';

const middlewares = [logger];

export default createStore(
    rootReducer,
    applyMiddleware(...middlewares),
)