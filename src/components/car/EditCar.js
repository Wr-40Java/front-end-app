import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import React from "react";
import error from "../Error";
import CarBrandList from "./CarBrandList";
import CarEngineType from "./CarEngineType";



const CarBrands = ['KIA','NISSAN','VOLVO','TOYOTA','Toyota']
const url="http://localhost:8080/api/cardiary/car/get/";
const urlPut = "http://localhost:8080/api/cardiary/car/update";
const EditCar = () => {
    let {vinNumber} = useParams();
    const  [show,setShow]= useState(false);
    const [carData, setCarData] = useState({
        car: {
            brand: "",
            model: "",
            engineType: "",
            bodyType: "",
            color: "",
            productionYear: 0,
            horsePower: 0,
            tax: [],
            maintenanceHistories: [],
            insuranceCompanies: [],
            vinnumber: ""
        }
    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        const value = e.target.value;
        setCarData({
            car: {
                ...carData.car,
                [e.target.name]: value
            }
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const editData = {
            brand:carData.car.brand,
            model:carData.car.model,
            engineType:carData.car.engineType,
            bodyType:carData.car.bodyType,
            color:carData.car.color,
            productionYear:carData.car.productionYear,
            horsePower:carData.car.horsePower,
            vinnumber: carData.car.vinnumber,
            tax: carData.car.tax,
            insuranceCompanies: carData.car.insuranceCompanies,
            maintenanceHistories: carData.car.maintenanceHistories
        };
        console.log(editData)
        editCarInfo(editData);

    }
    const editCarInfo = (carData) => {

        axios.put(urlPut,carData).then((response) => {
                navigate("/cars")
            }
        ).catch((error) =>{
            console.log(error)
            setShow(true)
        });
    }
    useEffect(() => {
        const finalUrl = url + vinNumber
        axios.get(finalUrl).then((response) => {
            const car = response.data
            setCarData({car:car})

        });

    }, [])
    console.log(carData.car.vinnumber);

    return(<div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input id="vim-register"  type="text" name="vinNumber"
                       autoComplete="off" value={carData.car.vinnumber} readOnly="readonly"
                />
            </div>
            <CarBrandList data={carData.car.brand}   handleChange={handleChange}/>
            <div className="form-group">
                <input id="model-register" type="text" autoComplete="off" name="model"
                       placeholder="Your car model" onChange={handleChange} value={carData.car.model}
                       maxLength="17" minLength="17"
                />
            </div>
            <CarEngineType data={carData.car.engineType} handleChange={handleChange} />
            <div className="form-group">

                <input id="bodyType-register" type="text" autoComplete="off" name="bodyType"
                       placeholder="Your car body type" onChange={handleChange} value={carData.car.bodyType}
                />
            </div>
            <div className="form-group">
                <input id="color-register" type="color" autoComplete="off" name="color"
                       placeholder="Your car color" onChange={handleChange} value={carData.car.color}
                />
            </div>
            <div className="form-group">
                <input id="productionYear-register" type="number" autoComplete="off" name="productionYear"
                       placeholder="Your car production year" onChange={handleChange} value={carData.car.productionYear}
                       min="1903"
                />
            </div>
            <div className="form-group">
                <input id="horsePower-register" type="number" autoComplete="off" name="horsePower"
                       placeholder="Your car horse power" onChange={handleChange} value={carData.car.horsePower}
                       min="1" max="200"
                />
            </div>
            <button type="submit" className="my-2 btn btn-lg btn-success btn-block btn-secondary btn-sm">
               Edit car
            </button>
        </form>
        </div>
    )
}


export default EditCar;