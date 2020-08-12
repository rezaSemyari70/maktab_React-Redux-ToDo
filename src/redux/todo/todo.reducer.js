const initial_state = {
    todoList: [
        {
            id: 1,
            subject: "check list",
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
            subject: "double Check list",
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
        default:
            return state;
    }
}

export default todoReducer;