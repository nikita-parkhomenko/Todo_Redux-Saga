// outsource dependencies
import { Form } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Button } from 'reactstrap';
import React, { useCallback } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

// local dependencies
import TYPE from './actions';
import Validate from '../../services/validateService';
import TodoList from '../../components/TodoList/TodoList';
import CustomInput from '../../components/CustomInput/CustomInput';

const validate = values => {
    const error = {};

    const validName = Validate.isValidName(values.todo, { minL: 5, maxL: 10, noSpaces: true });
    if (!validName) {
        error.todo = 'Must be at least 5 and no more than 10 characters with no whitespaces'
    }

    const validEmail = Validate.isValidEmail(values.email, {});
    console.log(validEmail)
    if (!validEmail) {
        error.email = 'You have entered an invalid email address!'
    }

    return error;
}

const FORM_NAME = 'newTodoForm';

const ToDoApp = ({ handleSubmit }) => {
    const dispatch = useDispatch();
    const { disabled, errorMessage } = useSelector(state => state.todosReducer);

    const submit = useCallback(values => {
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
                        <Container fluid className="px-0">
                            <Row >
                                <Col xs="10">
                                    <Field
                                        name="name"
                                        placeholder="Enter your name"
                                        component={CustomInput}
                                    />
                                </Col>
                                <Col xs="2">
                                    <Button className="w-100" disabled={disabled} type="submit" color="primary">
                                        Add
                                    </Button>
                                </Col>
                            </Row>
                            <Row >
                                <Col xs="10">
                                    <Field
                                        name="email"
                                        placeholder="Enter your email"
                                        component={CustomInput}
                                    />
                                </Col>
                                <Col xs="2">
                                    <Button className="w-100" disabled={disabled} type="submit" color="primary">
                                        Add
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
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
