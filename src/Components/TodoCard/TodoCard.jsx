import React from 'react'
import {Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

function TodoCard({todo}) {

    return (
        <Row>
            <Col>
                <p>{todo.subject}</p>
                <p>{todo.describe}</p>
                <Link to={`/update/${todo.id}`}>Edit</Link>
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

export default TodoCard;
