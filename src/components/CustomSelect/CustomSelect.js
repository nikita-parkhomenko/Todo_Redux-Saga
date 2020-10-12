import React from 'react';
import { Input, Label } from 'reactstrap';

const CustomSelect = ({ options, label, input, meta: { touched, error } }) => (
    <div className="input-row mb-3">
        <Label>{label}</Label>
        <Input type="select" {...input}>
            <option></option>
            {
                options.map(({ value, text }) => (
                <option key={value} value={value}>{text}</option>
                ))
            }
        </Input>
        {touched && error && <div className="text-danger">{error}</div>}
    </div>
)

export default CustomSelect;
