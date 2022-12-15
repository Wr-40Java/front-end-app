import React, { useEffect } from 'react'

const InsuranceTypeSelect = (props) => {

const {insTypes, handleChange, defaultValue, setDataHook} = props;

useEffect(() => {
    setDataHook({type: insTypes[0].type}); 
    {console.log(insTypes[0].type)};
}, [])

  return ( 
    <select  onChange={handleChange}
        name='type'
        className='container mb-2'
        // value={defaultValue.type}
        >
            {console.log(defaultValue.type)}
            {insTypes.map((object, index) => (
                <option key={index} value={object.type} onChange={handleChange}>
                    {object.type}
                </option>
            ))}
        </select>
    )}

export default InsuranceTypeSelect
