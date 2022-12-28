import React from "react";


const CarBrandList = ({data,handleChange}) => {
    const CarBrands = ['KIA', 'NISSAN', 'VOLVO','BMW','MERCEDES']


    return(<div className="form-group">
        <select id="engineType-register"
                name="brand" autoComplete="off" value={data} onChange={handleChange}
        >
            <option> Select car brand</option>
            {
                CarBrands.map((brand)=>(
                    <option key={brand}>{brand}</option>
                ))
            }
        </select>
    </div>)
}

export default CarBrandList;