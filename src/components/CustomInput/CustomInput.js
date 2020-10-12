import React from 'react';
import { Input, Label } from 'reactstrap';

const CustomInput = ({ label, placeholder, input, type, meta: { touched, error } }) => {
    console.log(error)
    return (
        <div className="input-row mb-3">
            <Label>{label}</Label>
            <Input {...(touched ? { valid: !error } : {})} type={type} placeholder={placeholder} {...input} />
            {error && touched && <div className="warning">{error}</div>}
        </div>
    )
}

export default CustomInput;
