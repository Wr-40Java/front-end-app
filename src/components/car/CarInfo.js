import {useNavigate, useParams} from "react-router-dom";
import  {useState,useEffect} from "react";
import axios from "axios";
import DeleteCar from "./DeleteCar";




const url="http://localhost:8080/api/car/";
const CarInfo = () => {
    let {vinNumber} = useParams();
    const [carData, setCarData] = useState({
        car: {
            brand:"",
            model:"",
            engineType:"",
            bodyType:"",
            color:"",
            productionYear:0,
            horsePower:0,
            tax:[],
            maintenanceHistories: [],
            insuranceCompanies: [],
            vinnumber: ""
        }
    })

    useEffect(() => {
        const finalUrl = url+vinNumber
        axios.get(finalUrl).then((response) => {
            const car = response.data
            setCarData({car:car})
        });
    },[])
  return (
        <div className="container">
            <div className="p-3 mb-2 bg-primary text-white">
                <h1>
                    Vinnumber:
                    {carData.car.vinnumber}
                </h1>
                <h1>
                    Brand:
                    {carData.car.brand}
                </h1>
                <h1>
                    Model:
                    {carData.car.model}
                </h1>
                <h1>
                    Enginetype:
                    {carData.car.engineType}
                </h1>
                <h1>
                    Body type:
                    {carData.car.bodyType}
                </h1>
                <h1>
                    Color:
                    {carData.car.color}
                </h1>
                <h1>
                    Production year
                    {carData.car.productionYear}
                </h1>
                <h1>
                    Horse power:
                    {carData.car.horsePower}
                </h1>
                <h1>Maintenance history:</h1>
                {
                    carData.car.maintenanceHistories.length> 0 &&
                    <ul>
                        {
                            carData.car.maintenanceHistories.map(maintanence =>
                            <li>
                                {maintanence}
                            </li>)
                        }
                    </ul>
                }
                <h1>Taxes:</h1>
                {
                    carData.car.tax.length> 0 &&
                    <ul>
                        {
                            carData.car.tax.map(tax =>
                                <li>
                                    {tax}
                                </li>)
                        }
                    </ul>
                }
                <h1> Insurence companies:</h1>
                {
                    carData.car.insuranceCompanies.length> 0 &&
                    <ul>
                        {
                            carData.car.insuranceCompanies.map(company =>
                                <li>
                                    {company}
                                </li>)
                        }
                    </ul>
                }
            </div>
            <DeleteCar vinNumber={carData.car.vinnumber} />
        </div>
  )
}
export default CarInfo;