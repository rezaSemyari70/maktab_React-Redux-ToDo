import types from './todo.types';

const initial_state = {
    todoList: [
        {
            id: 1,
            subject: "check list",
            describe:'Describetion ...',
            checkList: [
                {
                    id: 1,
                    text: "first job",
                    status: false
                }, {
                    id: 2,
                    text: "second job",
                    status: false
                }
            ]
        }, {
            id: 2,
            subject: "another Check list",
            describe:'Describetion ...',
            checkList: [
                {
                    id: 1,
                    text: "first job",
                    status: false
                }, {
                    id: 2,
                    text: "second job",
                    status: true
                }
            ]
        }
    ]
}
const todoReducer = (state = initial_state, action) => {
    const {type , payload} = action;
    switch (type) {
        case types.ADD_TO_DO :
            return {
                ...state , 
                todoList : [...state.todoList , payload]
            }
        case types.EDIT_TO_DO :
            return {
                ...state , 
                todoList : state.todoList.map(item => item.id == payload.id ? payload : item)
            }
        case types.DELETE_TO_DO :
            return {
                ...state , 
                    todoList : state.todoList.filter(item => item.id !== payload)
            }

        default:
            return state;
    }
}

export default todoReducer;