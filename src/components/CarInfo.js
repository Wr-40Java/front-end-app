import {useNavigate, useParams} from "react-router-dom";
import  {useState,useEffect} from "react";
import axios from "axios";
import {any, number, string} from "prop-types";
import {re} from "@babel/core/lib/vendor/import-meta-resolve";



const url="http://localhost:8080/api/car/";
const CarInfo = () => {
    let {vinNumber} = useParams();
    const [carData, setCarData] = useState({
        car: {
        }
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url + vinNumber).then((response) => {
            const car = response.data
            setCarData({car:car})
        });
    },[])
  return (
      <h1>{carData.car.vinnumber}</h1>
  )
}
export default CarInfo;