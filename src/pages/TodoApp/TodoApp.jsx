// outsource dependencies
import { Button } from 'reactstrap';
import { Form, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

// local dependencies
import TodoList from '../../components/TodoList/TodoList';
import { addTodo, CLEAR_TODOS } from './actions';

const ToDoApp = () => {
    const [ newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    useEffect(() => () => dispatch({ type: CLEAR_TODOS }), [dispatch]);

    return (
            <div 
                className="d-flex flex-column align-items-stretch mx-auto"
            >
                <header 
                    className="mb-3 d-flex flex-column align-items-center"
                >
                    <h1>Todos</h1>

                    <Form 
                        className="row w-100 d-flex justify-content-between"
                        onSubmit={e => {
                            e.preventDefault();

                            dispatch(addTodo({
                                title: newTodo,
                                completed: false,
                                id: +new Date(),
                            }));

                            setNewTodo('');
                        }}
                    >
                        <Input
                            bsSize="lg"
                            type="text"
                            value={newTodo}
                            className="col-9"
                            placeholder="What needs to be done?" 
                            onChange={e => setNewTodo(e.target.value)}
                        />

                        <Button className="col-2" color="primary">
                            Add
                        </Button>
                    </Form>
                </header>

                <main>
                    <TodoList />
                </main>
            </div>
    )
}

export default ToDoApp;