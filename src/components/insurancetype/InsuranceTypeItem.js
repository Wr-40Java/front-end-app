import PropTypes from 'prop-types'
import React from 'react'

const MyLi = () => {
    const {id, type, description, costsPerYear, coveredCompensation} = props;

    return (
        <div className='container'>
            <ul>
                <li>{type}</li>
                <li>{description}</li>
                <li>{costsPerYear}</li>
                <li>{coveredCompensation}</li>
            </ul>
        </div>
    )
}
export default MyLi;