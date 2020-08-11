import React , {useState} from 'react'
import { Container } from 'reactstrap'
import TodoCard from '../../Components/TodoCard/TodoCard'

function TodoList() {

    const [todoList , setTodoList] = useState([
        {
            id : 1,
            subject : "check list",
            checkList : [
                {
                    id : 1 ,
                    text : "first job" ,
                    status : false
                },
                {
                    id : 2 ,
                    text : "second job" ,
                    status : false
                }
            ]
        },
        {
            id : 2,
            subject : "double Check list",
            checkList : [
                {
                    id : 1 ,
                    text : "first job" ,
                    status : false
                },
                {
                    id : 2 ,
                    text : "second job" ,
                    status : true
                }
            ]
        },
    ])

    return (
        <Container>
            
                {todoList.map(todo => 
                    <TodoCard key={todo.id} todo={todo}/>
                )}
           
        </Container>
    )
}

export default TodoList
