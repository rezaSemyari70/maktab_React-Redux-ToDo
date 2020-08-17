import types from './todo.types';

export const addTodo = (todo) => {
    return {
        type : types.ADD_TO_DO,
        payload : todo 
    }
}

export const editTodo = (todo) => {
    return {
        type : types.EDIT_TO_DO,
        payload : todo 
    }
}

export const deleteTodo = (todo) => {
    return {
        type : types.DELETE_TO_DO,
        payload : todo 
    }
}