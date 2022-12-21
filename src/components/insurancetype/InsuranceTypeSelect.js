import React, { useEffect } from 'react'
import { useFormik } from 'formik';


const InsuranceTypeSelect = (props) => {

const {insTypes, handleChange, valuesType
    // , setDataHook
} = props;

useEffect(() => {
    // setDataHook({type: insTypes[0].type}); 
    {console.log(insTypes[0].type)};
    {console.log(insTypes)};
}, [])



  return ( 
    <select  onChange={handleChange}
        name='type'
        className='container mb-2'>

            {insTypes.map((object, index) => (
                <option key={index} value={valuesType} onChange={handleChange}>
                    {object.type}
                </option>
            ))}
        </select>
    )}

export default InsuranceTypeSelect
