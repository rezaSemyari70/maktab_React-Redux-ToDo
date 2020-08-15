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
    switch (action.type) {
        case types.ADD_TO_DO :
            return {
                ...state , 
                todoList : [...state.todoList , action.payload]
            }

        default:
            return state;
    }
}

export default todoReducer;