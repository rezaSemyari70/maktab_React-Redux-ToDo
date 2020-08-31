import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Form, FormGroup
    // Row, Col, Container
} from 'reactstrap'
import {useHistory} from 'react-router-dom';
import {addTodo, editTodo} from '../../redux/todo/todo.actions';
import {connect} from 'react-redux';
import {todoId} from '../../redux/todo/todo.selectors';
import {createStructuredSelector} from 'reselect';
// import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
  
  const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginTop: '50px'

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        fontSize: 20,
        marginBottom: '50px'
    },
    pos: {
        marginBottom: 12
    },
    margin: {
      margin: theme.spacing(1),
    },
    addCheckItemBtn:{
        backgroundColor: '#f54189',
        '&:hover':{
            color: '#fff',
            fontWeight : 'bold'
        }
    },
    saveBtn:{
        backgroundColor: '#2db378',
        '&:hover':{
            backgroundColor: '#17744b',
            color: '#fff',
            fontWeight : 'bold'
        }
    }   
  }));
  

function AddTodoForm({addTodo, todoId, editTodo}) {
    const classes = useStyles();

    // const [value,setValue] = React.useState('Controlled');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };
    // const todoId2 = useSelector(state => state.todo.todoList.length + 1)
    let history = useHistory();
    let {id} = useParams();
    const tempraryTodo = useSelector(state => state.todo.todoList.find(item => item.id == id))
    const [todo,
        setTodo] = useState(tempraryTodo
        ? {
            subject: tempraryTodo.subject,
            describe: tempraryTodo.describe
        }
        : {
            subject: '',
            describe: ''
        })

    const [checkItems,
        setCheckItems] = useState(tempraryTodo
        ? tempraryTodo.checkList
        : [
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

        tempraryTodo && editTodo({
            id: tempraryTodo.id,
            ...todo,
            checkList: checkItems
        })

        !tempraryTodo && addTodo({
            id: todoId,
            ...todo,
            checkList: checkItems
        })
        history.push('/');
    }

    return (

        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Add ToDo
                </Typography>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <FormGroup>
                        {/* <Label htmlFor="title">Title</Label> */}
                        <TextField
                            value={todo.subject}
                            onChange={handleChangeItem}
                            name="subject"
                            id="title"
                            fullWidth
                            label="subject Todo"
                            variant="outlined"/>

                    </FormGroup>
                    <FormGroup>
                        <TextField
                            value={todo.describe}
                            onChange={handleChangeItem}
                            name="describe"
                            id="describe"
                            fullWidth
                            label="Describetion Todo"
                            variant="outlined"/>
                    </FormGroup>
                    {checkItems.map(checkItem => <FormGroup key={checkItem.id}>
                        <TextField
                            value={checkItem.text}
                            onChange={(event) => handleChangeCheckItem(event, checkItem.id)}
                            type="text"
                            name="title"
                            id="title"
                            fullWidth
                            label="Check Todo"
                            variant="outlined"/>
                    </FormGroup>)}
                    <CardActions>
                        <Button type="button" variant="contained" color="secondary" className={classes.addCheckItemBtn} onClick={addCheckItem}>Add checkItem</Button>{'  '}
                        <Button type="submit" className={classes.saveBtn}>Save</Button>
                    </CardActions>
                </Form>
            </CardContent>
        </Card>
    )
}

const mapStateToProps = createStructuredSelector({todoId})

export default connect(mapStateToProps, {addTodo, editTodo})(AddTodoForm)
