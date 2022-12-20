import React, {useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";



const CarBrands = ['KIA','NISSAN','VOLVO']
const AddCar = () =>{
    let user = useParams();
    const navigate = useNavigate();
    const  [show,setShow]= useState(false);
    const [data,setData] = useState({
        brand:"",
        model:"",
        engineType:"",
        bodyType:"",
        color:"",
        productionYear:"",
        horsePower:"",
        vinNumber:"",
        urlCar:"http://localhost:8080/api/car",
        urlUser:"http://localhost:8080/api/user/addCar"
    })
    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const carData = {
            brand:data.brand,
            model:data.model,
            engineType:data.engineType,
            bodyType:data.bodyType,
            color:data.color,
            productionYear:data.productionYear,
            horsePower:data.horsePower,
            vinnumber:data.vinNumber
        };
        addCarToCarsTable(carData);

    }
    const addCarToCarsTable = (carData) => {

        axios.post(data.urlCar, carData).then((response) => {
            addCarToUser();
            navigate("/cars")
        }).catch((error) => {
            setShow(true);
        });
    }
    const addCarToUser = () => {
        const userURL = data.urlUser+'/'+user.userName+'/'+data.vinNumber
        axios.put(userURL).then((respone) =>{

        }).catch((error) =>{
            console.log(error)
        })
    }
    console.log(user);
    if(user != null){
    return(<div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input id="vim-register" placeholder="Your car Vim number" type="text" name="vinNumber"
                           autoComplete="off" value={data.vinNumber} onChange={handleChange}
                            maxLength="17" minLength="17"
                    />
                </div>
                <div className="form-group">
                    <select id="brand-register"
                            name="brand" autoComplete="off" value={data.brand} onChange={handleChange}
                    >
                        <option> Select option...</option>
                        {
                            CarBrands.map((brand)=>(
                                <option key={brand}>{brand}</option>
                            ))
                        }
                        </select>
                </div>
                <div className="form-group">
                    <input id="model-register" type="text" autoComplete="off" name="model"
                           placeholder="Your car model" onChange={handleChange} value={data.model}
                    />
                </div>
                <div className="form-group">

                    <input id="engineType-register" type="text" autoComplete="off" name="engineType"
                           placeholder="Your car engine type" onChange={handleChange} value={data.engineType}
                    />
                </div>
                <div className="form-group">

                    <input id="bodyType-register" type="text" autoComplete="off" name="bodyType"
                           placeholder="Your car body type" onChange={handleChange} value={data.bodyType}
                    />
                </div>
                <div className="form-group">
                    <input id="color-register" type="color" autoComplete="off" name="color"
                           placeholder="Your car color" onChange={handleChange} value={data.color}
                    />
                </div>
                <div className="form-group">
                    <input id="productionYear-register" type="number" autoComplete="off" name="productionYear"
                           placeholder="Your car production year" onChange={handleChange} value={data.productionYear}
                           min="1903"
                    />
                </div>
                <div className="form-group">
                    <input id="horsePower-register" type="number" autoComplete="off" name="horsePower"
                           placeholder="Your car horse power" onChange={handleChange} value={data.horsePower}
                           min="1" max="200"
                    />
                </div>
                <button type="submit" className="my-2 btn btn-lg btn-success btn-block btn-secondary btn-sm">
                   Add car to your profile
                </button>
            </form>
            {
                show?
                    <Error/>:
                    null
            }
        </div>
    )
}else {
        return(
            <h2 className="text-center">
                <strong> You are not sign up </strong>
            </h2>
        )
    }
}
const Error = () => (
    <div id="results" className="search-results">
        <h4 className="text-danger">
            Check your data
        </h4>
    </div>
)
export default  AddCar;