import React from "react";


const CarEngineType = ({data,handleChange})=> {
    const CarBrands = ['Diesel', 'Electric', 'Hybrid']


    return (<div className="form-group">
        <select id="brand-register"
                name="engineType" autoComplete="off" value={data} onChange={handleChange}
        >
            <option> Select car engine</option>
            {
                CarBrands.map((brand) => (
                    <option key={brand}>{brand}</option>
                ))
            }
        </select>
    </div>)
}

export default CarEngineType