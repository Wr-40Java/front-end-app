import React from 'react'

const InsuranceTypeSelect = (props) => {

const {insTypes, handleChange} = props;    

  return ( 
    <select 
        name='type'
        value='type'
        onChange={handleChange}
        >
            {insTypes.map((object, index) => (
                <option key={index} value={object.type}>
                    {object.type}
                </option>
            ))}
        </select>
    )}
         

         //     <div>
//         {props.items.map((type, index) => (<p>{type}</p>))}
//     </div>   
//   ) 
// }

export default InsuranceTypeSelect
