import React from 'react';
import { Input, Label } from 'reactstrap';

const CustomSelect = ({ options, label, meta: { touched, error } }) => {
    return (
        <div className="input-row mb-3">
            <Label>{label}</Label>
            <Input type="select" >
                <option></option>
                {
                    options.map(({ value, text }) => (
                    <option key={value} name={value} value={value}>{text}</option>
                    ))
                }
            </Input>
            {touched && error && <div className="warning">{error}</div>}
        </div>
    )
}

export default CustomSelect;
