import React from 'react'
import {Row, Col, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import {deleteTodo} from '../../redux/todo/todo.actions'
import {connect} from 'react-redux';
function TodoCard({todo , deleteTodo}) {

    return (
        <Row>
            <Col>
                <p>{todo.subject}</p>
                <p>{todo.describe}</p>
                <Link to={`/update/${todo.id}`}>Edit</Link>
                <Button onClick={()=>deleteTodo(todo.id)}>Delete</Button>
                <ul>
                    {todo.checkList.map(checkItem => 

                        <li key={`${todo.id}${checkItem.id}`}>
                            {checkItem.status 
                                ? <del>{checkItem.text}</del > 
                                : checkItem.text                      
                            }     
                        </li>
  
                    )}
                </ul>
            </Col>
        </Row>
    )
}

export default connect(null , {deleteTodo})(TodoCard);
