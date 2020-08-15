import React, {useState} from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardTitle,
    CardBody,
    Row,
    Col,
    Container,
    Button
} from 'reactstrap'
import {useHistory} from 'react-router-dom';
import {addTodo} from '../../redux/todo/todo.actions';
import {connect} from 'react-redux';

function AddTodoForm({addTodo}) {
    let history = useHistory();

    const [todo , setTodo] = useState({subject: '', describe: ''})
    const [checkItems , setCheckItems] = useState([
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
        const {name , value} = event.target;
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
            id:checkItems.length + 1 ,
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
                        <CardTitle>Add ToDos</CardTitle>
                        <CardBody>
                            <Form onSubmit={(event) => handleSubmit(event)}>
                                <FormGroup>
                                    <Label htmlFor="title">Title</Label>
                                    <Input value={todo.subject} onChange={handleChangeItem} name="subject" id="title"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="text">Describe</Label>
                                    <Input value={todo.describe} onChange={handleChangeItem} name="describe" id="describe"/>
                                </FormGroup>

                                {checkItems.map(checkItem => 

                                    <FormGroup key={checkItem.id}>
                                        <Label htmlFor="title">ChekItem</Label>
                                        <Input
                                            value={checkItem.text}
                                            onChange={(event) => handleChangeCheckItem(event, checkItem.id)}
                                            type="text"
                                            name="title"
                                            id="title"/>
                                    </FormGroup>
                                )}

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


export default connect(null, {addTodo})(AddTodoForm)
