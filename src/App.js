import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import TodoList from './Views/TodoList/TodoList';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddTodoForm from './Views/AddTodo/AddTodoForm';
import {CSSTransition} from 'react-transition-group'
import './App.css';
import BackgroundFade from './Views/BackgroundFade/BackgroundFade';

const routes = [
    {
        path: '/update/:id',
        name: 'AddTodoForm',
        Component: AddTodoForm
    }, {
        path: '/add',
        name: 'AddTodoForm',
        Component: AddTodoForm
    }, {
        path: '/maktab_React-Redux-ToDo',
        name: 'TodoList',
        Component: TodoList
    }, {
        path: '/',
        name: 'TodoList',
        Component: TodoList
    }
]

function App() {
    return (
        <Provider store={store}>
            <div>
                <BackgroundFade/>
                <Router>
                    <div className="container">
                        {routes.map(({path, Component}) => (
                            <Route key={path} exact path={path}>
                                {({match}) => (
                                    <CSSTransition in={match != null} timeout={800} classNames="page" unmountOnExit>
                                        <div className="page">
                                            <Component/>
                                        </div>
                                    </CSSTransition>
                                )}
                            </Route>
                        ))}
                    </div>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
