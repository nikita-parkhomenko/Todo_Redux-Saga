import React, { useMemo } from 'react';
import { Input, Label } from 'reactstrap';

const CustomInput = ({ label, placeholder, input, type, meta: { touched, error } }) => {
    const valid = useMemo(() => touched && !error ? !error : null, [error, touched]);

    return (
        <div className="input-row w-100 mb-4">
            {label && <Label>{label}</Label>}
            <Input valid={valid} type={type} placeholder={placeholder} {...input} />
            {error && touched && <div className="text-danger">{error}</div>}
        </div>
    )
}

export default CustomInput;
