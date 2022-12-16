import {useNavigate, useParams} from "react-router-dom";
import  {useState,useEffect} from "react";
import axios from "axios";




const url="http://localhost:8080/api/car/";
const CarInfo = () => {
    let {vinNumber} = useParams();
    const [carData, setCarData] = useState({
        car: {
        }
    })
    const navigate = useNavigate();

    useEffect(() => {
        const finalUrl = url+vinNumber
        axios.get(finalUrl).then((response) => {
            const car = response.data
            setCarData({car:car})
        });
    },[])
  return (
     <h1>{carData.car.id}</h1>
  )
}
export default CarInfo;