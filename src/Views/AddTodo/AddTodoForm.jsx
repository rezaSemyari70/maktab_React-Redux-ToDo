import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Card, CardTitle, CardBody, Row, Col, Container, Button} from 'reactstrap'
import {useHistory} from 'react-router-dom';
import {addTodo} from '../../redux/todo/todo.actions';
import {connect} from 'react-redux';
import {todoId} from '../../redux/todo/todo.selectors';
import {createStructuredSelector} from 'reselect';
// import {useSelector} from 'react-redux';

function AddTodoForm({addTodo, todoId}) {
    let history = useHistory();
    // const todoId2 = useSelector(state => state.todo.todoList.length + 1)

    const [todo,
        setTodo] = useState({subject: '', describe: ''})
    const [checkItems,
        setCheckItems] = useState([
        {
            id: 1,
            text: '',
            status: false
        }
    ])

    const addCheckItem = () => {
        setCheckItems([
            ...checkItems, {
                id: checkItems.length + 1,
                text: '',
                status: false
            }
        ])
    }

    const handleChangeItem = (event) => {
        const {name, value} = event.target;
        setTodo({
            ...todo,
            [name]: value
        })
    }

    const handleChangeCheckItem = (event, id) => {
        setCheckItems(checkItems.map(checkItem => checkItem.id === id
            ? {
                ...checkItem,
                text: event.target.value
            }
            : checkItem))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo({
            id: todoId,
            ...todo,
            checkList: checkItems
        })
        history.push('/');
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardTitle align="center">Add ToDo</CardTitle>
                        <CardBody>
                            <Form onSubmit={(event) => handleSubmit(event)}>
                                <FormGroup>
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        value={todo.subject}
                                        onChange={handleChangeItem}
                                        name="subject"
                                        id="title"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="text">Describe</Label>
                                    <Input
                                        value={todo.describe}
                                        onChange={handleChangeItem}
                                        name="describe"
                                        id="describe"/>
                                </FormGroup>

                                {checkItems.map(checkItem => <FormGroup key={checkItem.id}>
                                    <Label htmlFor="title">ChekItem</Label>
                                    <Input
                                        value={checkItem.text}
                                        onChange={(event) => handleChangeCheckItem(event, checkItem.id)}
                                        type="text"
                                        name="title"
                                        id="title"/>
                                </FormGroup>)}

                                <Button type="button" onClick={addCheckItem}>Add checkItem</Button>{'  '}
                                <Button>Save</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = createStructuredSelector({todoId})

export default connect(mapStateToProps, {addTodo})(AddTodoForm)
