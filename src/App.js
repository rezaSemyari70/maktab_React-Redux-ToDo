import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
import TodoList from './Views/TodoList/TodoList';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AddTodoForm from './Views/AddTodo/AddTodoForm';
import {Container} from 'reactstrap';

function App() {
    return (
        <Provider store={store}>
            <Container>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <TodoList/>
                        </Route>
                        <Route exact path='/add'>
                            <AddTodoForm/>
                        </Route>
                        <Route exact path='/update/:id'>
                            <AddTodoForm/>
                        </Route>
                        <Route exact path='/todo/:id'></Route>
                    </Switch>
                </Router>

            </Container>
        </Provider>
    );
}

export default App;
