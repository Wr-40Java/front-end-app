import React, { useEffect } from 'react'

const InsuranceTypeSelect = (props) => {

const {insTypes, handleChange, defaultValue, setDataHook} = props;

useEffect(() => {
    setDataHook({type: insTypes[0].type, description: insTypes[0].description, costsPerYear:insTypes[0].costsPerYear,
        coveredCompensation:insTypes[0].coveredCompensation}); {console.log(insTypes[0].type)};
}, [])

  return ( 
    <select  onChange={handleChange}
        name='type'
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
