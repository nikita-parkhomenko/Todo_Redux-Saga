// outsource dependencies
import { Alert } from 'reactstrap';
import { Button } from 'reactstrap';
import { Form, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

// local dependencies
import TodoList from '../../components/TodoList/TodoList';
import { addTodo, CLEAR_TODOS } from './actions';

const ToDoApp = () => {
    const [ newTodo, setNewTodo ] = useState('');
    const [ validationError, setValidationError ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => () => dispatch({ type: CLEAR_TODOS }), [dispatch]);

    const addNewTodo = (e) => {
        e.preventDefault();

        if (!newTodo.trim()) {
            setValidationError(true);
            return;
        }

        dispatch(addTodo({
            title: newTodo,
            completed: false,
            id: +new Date(),
            })
        );

        setNewTodo('');
    }

    return (
            <div 
                className="d-flex flex-column align-items-stretch mx-auto"
            >
                <header 
                    className="mb-3 d-flex flex-column align-items-center"
                >
                    <h1>Todos</h1>

                    <Form 
                        className="row w-100 d-flex justify-content-between mb-2"
                        onSubmit={e => addNewTodo(e)}
                    >
                        <Input
                            bsSize="lg"
                            type="text"
                            value={newTodo}
                            className="col-9"
                            placeholder="What needs to be done?" 
                            onChange={e => {
                                if (e.target.value.trimLeft()) {
                                    setValidationError(false);
                                }
                                setNewTodo(e.target.value)
                            }}
                        />

                        <Button className="col-2" color="primary">
                            Add
                        </Button>
                    </Form>
                    {
                        validationError && <Alert color="danger">Please enter your task first</Alert>
                    }
                </header>

                <main>
                    <TodoList />
                </main>
            </div>
    )
}

export default ToDoApp;