import {combineReducers} from 'redux';
import todoReducer from './todo/todo.reducer';


export default combineReducers({
    todo : todoReducer
})