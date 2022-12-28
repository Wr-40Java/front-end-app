import axios from "axios";
import {useNavigate} from "react-router-dom";


const DeleteCar = ({username,vinNumber,stateChanger}) =>{
    const urlP="http://localhost:8080/api/cardiary/user/deleteCar/";
    const urlG ="http://localhost:8080/api/cardiary/user/";
    const urlD="http://localhost:8080/api/cardiary/car/delete/"
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
        let url = urlP+ username +"/" + vinNumber
        await axios.put(url).then(response => console.log(response.status)).catch(error => console.log(error));
        await axios.delete(urlD+vinNumber).then(response =>console.log(response.status)).catch(error => console.log(error));
    }

    const changeState = () =>{
         let url= urlG+username+"/cars"
        axios.get(url).then((response) => {
            const cars = response.data;
            stateChanger({cars});
        })
    }
    return(
        <button type="button" className="btn btn-danger" onClick={event => deleteCar(event)}>Delete</button>
    )
}

export default DeleteCar;
