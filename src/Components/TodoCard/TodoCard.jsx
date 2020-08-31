import React from 'react'
import {Row, Col} from 'reactstrap';
// import {Link} from 'react-router-dom';
import {deleteTodo, toggleStatusCheckItem} from '../../redux/todo/todo.actions'
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton'; import DeleteIcon from
// '@material-ui/icons/Delete';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
// import Link from '@material-ui/core/Link';
import Swal from 'sweetalert2'
import AssignmentIcon from '@material-ui/icons/Assignment';
// import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './TodoCard.css';
import ContentTodo from '../ContentTodo/ContentTodo';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    editBtn: {
        color: 'blue',

        '&:hover': {
            color: 'darkblue',
            textDecoration: 'none',
            fontWeight: 'bold'
        }

    },

    deleteBtn: {
        color: 'gray',
        '&:hover': {
            color: '#d5172d',
            textDecoration: 'none',
            fontWeight: 'bold'
        }
    },
    // inputCheck:{     marginRight:10, }, checkItem:{     cursor:'pointer', },
    // describeTitle:{     paddingLeft:20, },
    iconTodo: {
        color: '#929292',
        marginRight: 10
    }

}));

function TodoCard({todo, deleteTodo, toggleStatusCheckItem}) {

    const classes = useStyles();
    const [anchorEl,
        setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = () => {
        handleClose();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'error',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#eee',
            confirmButtonText: 'Yes, delete it!',
            showClass: {
                popup: 'swal2-noanimation',
                backdrop: 'swal2-noanimation'
            },
            hideClass: {
                popup: '',
                backdrop: ''
            },
            customClass: {
                container: 'container-class',
                popup: 'popup-class',
                header: 'header-class',
                title: 'title-class',
                closeButton: 'close-button-class',
                icon: 'icon-class',
                image: 'image-class',
                content: 'content-class',
                input: 'input-class',
                actions: 'actions-class',
                confirmButton: 'confirm-button-class',
                cancelButton: 'cancel-button-class',
                footer: 'footer-class'
            }
        }).then((result) => {
            if (result.value) {
                deleteTodo(todo.id)
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
            }

        })
    }

    return (
        <Row>
            <Col>
                <div>

                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <AssignmentIcon className={classes.iconTodo}/>
                        <p>{todo.subject}</p>
                    </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}>
                            <MenuItem >
                                <Link to={`/update/${todo.id}`} className={classes.editBtn}>Edit</Link>
                            </MenuItem>
                            {/* <Link> */}
                            <MenuItem onClick={handleDelete} className={classes.deleteBtn}>Delete</MenuItem>
                            {/* </Link> */}
                        </Menu>
                </div>
                <ContentTodo todo={todo} toggleStatusCheckItem={toggleStatusCheckItem}/> 
                {/* <p>{todo.subject}</p> */}
                {/* <p className={classes.describeTitle}>{todo.describe}</p>

                <ul>
                    {todo
                        .checkList
                        .map(checkItem => <span
                            onClick={() => toggleStatusCheckItem(todo.id, checkItem.id)}
                            key={`${todo.id}${checkItem.id}`}>
                            <li >

                                {checkItem.status
                                    ? <span className={classes.checkItem}><input className={classes.inputCheck} type="checkbox" checked/><del>{checkItem.text}</del></span>
                                    : <span className={classes.checkItem}><input className={classes.inputCheck} type="checkbox" null/>{checkItem.text}</span>}

                            </li>
                        </span>)}
                </ul> */}
            </Col>
        </Row>
    )
}

export default connect(null, {deleteTodo, toggleStatusCheckItem})(TodoCard);
