import React from 'react'
import {Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {deleteTodo, toggleStatusCheckItem} from '../../redux/todo/todo.actions'
import {connect} from 'react-redux';
function TodoCard({todo, deleteTodo, toggleStatusCheckItem}) {

    return (
        <Row>
            <Col>
                <p>{todo.subject}</p>
                <p>{todo.describe}</p>
                <Link to={`/update/${todo.id}`}>Edit</Link>
                <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
                <ul>
                    {todo.checkList.map(checkItem =>

                        <span 
                            onClick={() => toggleStatusCheckItem(todo.id, checkItem.id)}
                            key={`${todo.id}${checkItem.id}`}
                        >
                            <li >

                                {checkItem.status
                                    ? <del>{checkItem.text}</del >
                                    : checkItem.text}

                            </li>
                        </span>)}
                </ul>
            </Col>
        </Row>
    )
}

export default connect(null, {deleteTodo, toggleStatusCheckItem})(TodoCard);
