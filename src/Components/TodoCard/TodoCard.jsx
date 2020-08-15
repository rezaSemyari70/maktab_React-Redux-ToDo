import React from 'react'
import {Row, Col} from 'reactstrap';

function TodoCard({todo}) {
    return (
        <Row>
            <Col>
                <p>{todo.subject}</p>
                <p>{todo.describe}</p>
                <ul>
                    {todo.checkList.map(checkItem => 

                        <li key={`${todo.id}${checkItem.id}`}>
                            {checkItem.status 
                                ? <del>{checkItem.text}</del > 
                                : checkItem.text
                    
                    }   </li>
                    
                    )}
                </ul>
            </Col>
        </Row>
    )
}

export default TodoCard;
