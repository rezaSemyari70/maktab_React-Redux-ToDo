import types from './todo.types';

export const addTodo = (todo) => {
    return {
        type : types.ADD_TO_DO,
        payload : todo 
    }
}