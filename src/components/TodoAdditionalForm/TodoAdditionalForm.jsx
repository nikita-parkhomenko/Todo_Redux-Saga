// outsource dependencies
import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'reactstrap';

// local dependencies
import CustomInput from '../CustomInput/CustomInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import { UPDATE_TODO } from '../../pages/TodoDetail/actions';

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

const priorityOptins = [
    { value: 'low', text: 'Low' },
    { value: 'medium', text: 'Medium' },
    { value: 'high', text: 'High' },
];

const TodoAdditionalForm = ({ handleSubmit, pristine, reset, submitting, todo }) => {
    const dispatch = useDispatch();

    const submitForm = values => {
        dispatch({ type: UPDATE_TODO, values, todo })
    }

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
                    options={priorityOptins} 
                    component={CustomSelect} 
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
