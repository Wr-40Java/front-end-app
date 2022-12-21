import { useField } from 'formik'
import React from 'react'

const CustomSelect = ({ label, ...props }) => {

    const [field, meta, helpers] = useField(props);

    return (
        <>
            <label>{label}</label>
            <select {...field} {...props}
            className={meta.touched && meta.error ? 'form-control input-error' : 'form-control'} />
        </>
    )
}

export default CustomSelect
