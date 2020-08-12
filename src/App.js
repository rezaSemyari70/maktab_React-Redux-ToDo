import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
import TodoList from './Views/TodoList/TodoList';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <TodoList/>
            </div>
        </Provider>
    );
}

export default App;
