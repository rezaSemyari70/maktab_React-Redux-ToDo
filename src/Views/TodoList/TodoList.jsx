import React from 'react'
import { Container } from 'reactstrap'
import TodoCard from '../../Components/TodoCard/TodoCard'
import {connect} from 'react-redux';

function TodoList({todoList}) {


    return (
        <Container>
                {todoList.map(todo => 
                    <TodoCard key={todo.id} todo={todo}/>
                )}
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        todoList : state.todo.todoList
    }
}

export default connect (mapStateToProps , {})(TodoList);
