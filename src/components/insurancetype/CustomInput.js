import { useField } from 'formik'
import React from 'react'

const CustomInput = ({ label, ...props }) => {

    const [field, meta, helpers] = useField(props);

    return (
        <>
            <label>{label}</label>
            <input {...field} {...props}
            className={meta.touched && meta.error ? 'form-control input-error' : 'form-control'} />
                 {meta.touched && meta.error && <div className="info-error">{meta.error}</div>}
        </>
    )
}

export default CustomInput
