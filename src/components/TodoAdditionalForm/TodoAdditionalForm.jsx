// outsource dependencies
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'reactstrap';

// local dependencies
import CustomInput from '../CustomInput/CustomInput';
import { UPDATE_TODO } from '../../pages/TodoDetail/actions';
const validate = values => {
    const errors = {};

    if (!values.description) {
      errors.description = 'Required';
    } else if (values.description.length < 5) {
      errors.description = 'Must be 5 characters or more';
    }

    return errors;
}

const TodoAdditionalForm = ({ handleSubmit, pristine, reset, submitting, todo }) => {
    const dispatch = useDispatch();
    const title = useSelector(state => state.todoReducer.todo.title);

    const submitForm = values => {
        dispatch({ type: UPDATE_TODO, values, todo })
    }

    return (
        <div className="p-3 d-flex flex-column bg-gradient-light text-dark">
            <h3 className="text-center pb-3">Add additional information</h3>
            <h4>Task: {title}</h4>

            <Form onSubmit={handleSubmit(submitForm)}>
                <Field
                    placeholder="Some description"
                    label="Add description" 
                    name="description" 
                    type="text" 
                    component={CustomInput} 
                />

                <Button type="submit" className="mr-2" color="success" disabled={submitting}>Save</Button>
                <Button type="reset" disabled={pristine || submitting} onClick={reset} color="warning">Reset</Button>
            </Form>

        </div>
    )
}

export default reduxForm({
    form: 'additional',
    validate,
})(TodoAdditionalForm);
