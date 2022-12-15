import React, {useEffect, useState} from "react";
import axios from "axios";
import CarInfo from "./CarInfo";
import {useNavigate} from 'react-router-dom';


const url="http://localhost:8080/api/user/MarkDestroyer/cars"
const UserCarList = (userName) => {
    const [data,setData] = useState(  {
     cars: []
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url).then((response) => {
            const cars = response.data;
            setData({cars});
        });
    }, []);

    return(<table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">
                Car VinNumber
            </th>
            <th scope="col">
                Car brand
            </th>
            <th scope="col">
                Car model
            </th>
            <th scope="col">
                Actions
            </th>
        </tr>
        </thead>
        <tbody>
        {
            data.cars.map(car =>
                <tr>
                    <th>{car.vinnumber}</th>
                    <th>{car.brand}</th>
                    <th> {car.model}</th>
                    <th>
                        <button type="button" class="btn btn-info" onClick={() =>(navigate("/car-info/"+car.vinnumber))}>More info</button>
                        < button type="button" class="btn btn-danger"> Delete car</button>
                    </th>
                </tr>)
        }
        </tbody>
    </table>)

}
export default UserCarList;