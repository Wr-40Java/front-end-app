import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import DeleteCar from "./DeleteCar";
import DeleteAllCars from "./DeleteAllCars";


const UserCarList = (userName) => {
    const getUser="http://localhost:8080/api/cardiary/user/"
    const [data,setData] = useState(  {
     cars: []
    })

    const navigate = useNavigate();

    useEffect(() => {
        if(userName!=null){
        const url = getUser+userName.userName+"/cars"
        axios.get(url).then((response) => {
            const cars = response.data;
            setData({cars});
        });
    }}, []);



    if(userName.userName!=null) {

        return (<div className="justify-content-center">
            <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">
                    Index
                </th>
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
                data.cars.map((car, index) =>
                    <tr>
                        <th>{index + 1} </th>
                        <th>{car.vinnumber}</th>
                        <th>{car.brand}</th>
                        <th> {car.model}</th>
                        <th>
                            <button type="button" className="btn btn-info"
                                    onClick={() => (navigate("/car-info/" + car.vinnumber))}>More info
                            </button>
                            <DeleteCar vinNumber={car.vinnumber} stateChanger={setData} username={userName.userName}/>
                            <button type="button" className="btn btn-info" onClick={() =>navigate("/car-edit/"+car.vinnumber)}>
                                Edit Car
                            </button>
                        </th>
                    </tr>)
            }
            </tbody>
        </table>
                <button type="button" className="btn btn-info"
                        onClick={() => (navigate("/addCar/"+userName.userName))
                        }>
                    Add new Car
                </button>
                {/*<DeleteAllCars/>*/}
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
export default UserCarList;
