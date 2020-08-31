import React from 'react'
import { Container, Card, CardHeader, CardBody } from 'reactstrap'
import TodoCard from '../../Components/TodoCard/TodoCard'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// import './TodoList.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginTop: '50px'
      },
    },
    addBtn : {
        backgroundColor: '#0b9b67',
        color: 'white',
    },
    addLink:{
        '&:hover':{
            textDecoration:'none',
        }
    }
  }));


function TodoList({todoList , props}) {

    const classes = useStyles();

    return (
        <Container className={classes.root}>
                <Card id="card">
                    <CardHeader>
                    <Link to='/add' className={classes.addLink}><Button size='large' className={classes.addBtn}><p>Add Todo</p></Button></Link>
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

// UnstyledComponent.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };


const mapStateToProps = state => {
    return {
        todoList : state.todo.todoList
    }
}

export default connect (mapStateToProps , {})(TodoList );
