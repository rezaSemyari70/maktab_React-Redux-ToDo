import {createSelector} from 'reselect';

const todoList = state => state.todo.todoList;

export const todoId = createSelector(
    todoList ,
    (todoItem) => todoItem.length + 1
)

