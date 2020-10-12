import React from 'react';
import { Input, Label } from 'reactstrap';

const CustomInput = ({ label, placeholder, input, type, meta: { touched, error } }) => {
    const valid = touched && !error ? !error : null;

    return (
        <div className="input-row mb-3">
            <Label>{label}</Label>
            <Input valid={valid} type={type} placeholder={placeholder} {...input} />
            {error && touched && <div className="text-danger">{error}</div>}
        </div>
    )
}

export default CustomInput;
