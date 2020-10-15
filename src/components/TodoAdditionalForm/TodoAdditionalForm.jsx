// outsource dependencies
import { Form, Button } from 'reactstrap';
import React, { useCallback } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

// local dependencies
import TYPE from '../../pages/TodoDetail/actions';
import CustomInput from '../CustomInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';

const validate = values => {
    const errors = {};

    if (!values.description) {
      errors.description = 'Required';
    } else if (values.description.length < 5) {
      errors.description = 'Must be 5 characters or more';
    }

    if(!values.priority) {
        errors.priority = 'You must enter priority!'
    }

    return errors;
}

const priorityOptions = [
    { value: 'low', text: 'Low' },
    { value: 'medium', text: 'Medium' },
    { value: 'high', text: 'High' },
];

const FORM_NAME = 'additionalForm';

const TodoAdditionalForm = ({ handleSubmit, pristine, reset, submitting, todo }) => {
    const dispatch = useDispatch();
    const { disabled } = useSelector(state => state.todoReducer);

    const submitForm = useCallback(values => {
        dispatch({ type: TYPE.UPDATE, payload: { values, todo } });
    }, [dispatch, todo]);

    return (
        <div className="p-3 d-flex flex-column bg-gradient-light text-dark">
            <h3 className="text-center pb-3">Add additional information</h3>

            <Form onSubmit={handleSubmit(submitForm)}>

                <Field
                    placeholder="Write new title"
                    label="Change your title"
                    name="title"
                    type="input"
                    component={CustomInput}
                />
                <Field
                    placeholder="Write your description"
                    label="Add description"
                    name="description"
                    type="textarea"
                    component={CustomInput}
                />
                <Field
                    label="Add priority"
                    name="priority"
                    options={priorityOptions}
                    component={CustomSelect}
                />

                <Button disabled={disabled} type="submit" className="mr-2" color="success">Save</Button>
                <Button type="reset" disabled={pristine || submitting} onClick={reset} color="warning">Reset</Button>
            </Form>

        </div>
    )
}

export default reduxForm({
    form: FORM_NAME,
    validate,
})(TodoAdditionalForm);
