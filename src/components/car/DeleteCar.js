import axios from "axios";
import {useNavigate} from "react-router-dom";

const urlP="http://localhost:8080/api/user/deleteCar/MarkDestroyer/";
const urlG ="http://localhost:8080/api/user/MarkDestroyer/cars";
const urlD="http://localhost:8080/api/car/"
const DeleteCar = ({vinNumber,stateChanger}) =>{
    const navigate = useNavigate();
     const deleteCar = async (e) => {
         if (stateChanger !== undefined) {
            await deleteCarFromUser();
            changeState();
         }else {
            await deleteCarFromUser();
            navigate("/cars")
         }
     }
    const deleteCarFromUser = async () => {
        let url = urlP + vinNumber
        await axios.put(url).then(response => console.log(response.status)).catch(error => console.log(error));
        url = urlD+ vinNumber
        await axios.delete(urlD+vinNumber).then(response =>console.log(response.status)).catch(error => console.log(error));
    }

    const changeState = () =>{
        axios.get(urlG).then((response) => {
            const cars = response.data;
            stateChanger({cars});
        })
    }
    return(
        <button type="button" className="btn btn-danger" onClick={event => deleteCar(event)}>Delete</button>
    )
}

export default DeleteCar;
