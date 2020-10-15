// outsource dependencies
import { Form } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomInput from '../../components/CustomInput/CustomInput';

// local dependencies
import TYPE from './actions';
import TodoList from '../../components/TodoList/TodoList';

const validate = values => {
    const error = {};

    if (!values.todo) {
        error.todo = 'Required!'
    } else if (values.todo.length < 5) {
        error.todo = 'Must be 5 characters or more'
    }

    return error;
}

const FORM_NAME = 'newTodoForm';

const ToDoApp = ({ handleSubmit }) => {
    const dispatch = useDispatch();
    const disabled = useSelector(state => state.todosReducer.disabled);
    const errorMessage = useSelector(state => state.todosReducer.errorMessage);

    useEffect(() => () => dispatch({ type: TYPE.CLEAR }), [dispatch]);

    const submit = useCallback( (values) => {
        dispatch({ type: TYPE.META, payload: { disabled: true }});

        const todo = {
            title: values.todo,
            completed: false,
            id: Date.now()
        }

        dispatch({ type: TYPE.ADD, payload: todo });
    }, [dispatch]);

    return (
            <div className="d-flex flex-column align-items-stretch mx-auto">
                <header className="mb-3 d-flex flex-column align-items-center">
                    { errorMessage && <Alert className="mt-2 text-right" color="danger"> {errorMessage} </Alert> }
                    <h1>Todos</h1>

                    <Form 
                        onSubmit={handleSubmit(submit)}
                        className="row w-100 d-flex justify-content-between align-items-center mb-2"
                    >
                        <Field 
                            name="todo" 
                            placeholder="Enter your task..." 
                            component={CustomInput}  
                        />

                        <Button disabled={disabled} type="submit" className="col-2 p-2" color="primary">
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

export default reduxForm({
    form: FORM_NAME,
    validate,
})(ToDoApp);