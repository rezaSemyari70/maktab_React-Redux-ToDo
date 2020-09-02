import React from 'react'
import {Container} from 'reactstrap'
import TodoCard from '../../Components/TodoCard/TodoCard'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {theme} from '../../theme';
import {ThemeProvider} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {makeStyles , withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            marginTop: '50px',
        }
    },
    media: {
        height: 240,
        marginRight: 15,
        marginLeft: 0,
        borderRadius: '4px '
    },
    addBtn: {
        height: 35,
        backgroundColor: '#284e43',
        color: 'white'
    },
    addLink: {

        '&:hover': {
            textDecoration: 'none'
        }
    }
}));

const CustomCard = withStyles({
    root:{
      borderRadius:'10px 10px 10px 20px',
      background:'linear-gradient(to right, #ecececdc , #979797c4)'
    }
})(Card)


function TodoList({todoList, props}) {

    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Container className={classes.root}>
                <CustomCard className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image= 'https://assets.imgix.net/unsplash/motorbike.jpg?auto=compress&w=900&h=600&fit=crop'
                           title="Contemplative Reptile"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <Link to='/add' className={classes.addLink}>
                                    <Button size='large' className={classes.addBtn}>
                                        <p>Add Todo</p>
                                    </Button>
                                </Link>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {todoList.map(todo => <TodoCard key={todo.id} todo={todo}/>)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </CustomCard>
            </Container>
        </ThemeProvider>
    )
}

// UnstyledComponent.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

const mapStateToProps = state => {
    return {todoList: state.todo.todoList}
}

export default connect(mapStateToProps, {})(TodoList);
