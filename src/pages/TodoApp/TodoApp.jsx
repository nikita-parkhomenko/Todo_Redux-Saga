// outsource dependencies
import { Button } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// local dependencies
import TodoList from '../../components/TodoList/TodoList';
import { addTodo, UPDATE_STORAGE } from '../../redux/actions';

const ToDoApp = () => {
    const [ newTodo, setNewTodo] = useState('');
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: UPDATE_STORAGE });
    }, [state]);

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