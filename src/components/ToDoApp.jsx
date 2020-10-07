// outsource dependencies
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// local dependencies
import './ToDoApp.scss';
import TodoList from './TodoList/TodoList';
import { addTodo } from '../redux/actions';
import { setStoreToStorage } from '../redux/saga';

const ToDoApp = () => {
    const [ newTodo, setNewTodo] = useState('');
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        setStoreToStorage(todos);
    }, [todos]);

    return (
            <div className="todo-app">
                <header className="todo-app__header">
                    <h1>Todos</h1>

                    <form onSubmit={e => {
                        e.preventDefault();

                        dispatch(addTodo({
                            title: newTodo,
                            completed: false,
                            id: +new Date(),
                        }));

                        setNewTodo('');
                    }}
                    >
                        <input
                            onChange={e => setNewTodo(e.target.value)}
                            value={newTodo}
                            className="todo-app__new-todo"
                            type="text"
                            placeholder="What needs to be done?" 
                        />

                        <Button color="primary">
                            Add to list
                        </Button>
                    </form>
                </header>

                <main>
                    <TodoList />
                </main>
            </div>
    )
}

export default ToDoApp;