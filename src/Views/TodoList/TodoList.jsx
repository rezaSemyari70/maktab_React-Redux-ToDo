import React from 'react'
import { Container, Card, CardHeader, Button, CardBody } from 'reactstrap'
import TodoCard from '../../Components/TodoCard/TodoCard'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

function TodoList({todoList}) {


    return (
        <Container>
                <Card>
                    <CardHeader>
                    <Link to='/add'><Button>Add Todo</Button></Link>
                    </CardHeader>
                    <CardBody>
                        {todoList.map(todo => 
                            <TodoCard key={todo.id} todo={todo}/>
                        )}
                    </CardBody>
                </Card>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        todoList : state.todo.todoList
    }
}

export default connect (mapStateToProps , {})(TodoList);
