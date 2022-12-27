import {useNavigate} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


const TechnicalServiceSave = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        cost: "",
        companyResponsibleForName: "",
        companyResponsibleForPhoneNumber: "",
        reason: "",
        description: ""
    })
    const [show, setShow] = React.useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            cost: data.cost,
            companyResponsibleForName: data.companyResponsibleForName,
            companyResponsibleForPhoneNumber: data.companyResponsibleForPhoneNumber,
            reason: data.reason,
            description: data.description
        };
        axios.post("http://localhost:8080/api/technical_service/maintenance_history/1", userData)
            .then((response) => {
                console.log(response.status);
                navigate('/');
            })
            .catch((error) => {
                console.log(error)
                setShow(true);
            });

    }
    return (
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
            <form onSubmit={handleSubmit}>
                <h3 className="p-3 text-center">Type your info about technical service.</h3>
                <div className="form-group">
                    <label htmlFor="cost" className="text-muted mb-1">
                        <small>Cost</small>
                    </label>
                    <input id="cost" name="cost" className="form-control"
                           type="text" placeholder="Cost" autoComplete="off"
                           value={data.cost} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="companyResponsibleForName" className="text-muted mb-1">
                        <small>Company responsible for </small>
                    </label>
                    <input id="companyResponsibleForName" name="companyResponsibleForName" className="form-control"
                           type="text" placeholder="Name of the company responsible for service" autoComplete="off"
                           value={data.companyResponsibleForName} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="companyResponsibleForPhoneNumber" className="text-muted mb-1">
                        <small>Phone Number of the company</small>
                    </label>
                    <input id="companyResponsibleForPhoneNumber" name="companyResponsibleForPhoneNumber"
                           className="form-control"
                           type="text" placeholder="Phone number" autoComplete="off"
                           value={data.companyResponsibleForPhoneNumber} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="reason" className="text-muted mb-1">
                        <small>Reason for service</small>
                    </label>
                    <input id="reason" name="reason" className="form-control"
                           type="text" placeholder="Reason" autoComplete="off"
                           value={data.reason} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="text-muted mb-1">
                        <small>Description</small>
                    </label>
                    <input id="description" name="description" className="form-control"
                           type="text" placeholder="Description" autoComplete="off"
                           value={data.description} onChange={handleChange}/>
                </div>
                <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block"
                        onMouseDown={() => (navigate("/technical_service"))}>
                    Add
                </button>
            </form>
            {
                show ?
                    <Error/> :
                    null
            }
        </div>
    );
};
const Error = () => (
    <div id="results" className="search-results">
        <h4 className="text-danger">
            Check your data
        </h4>
    </div>
)
export default TechnicalServiceSave;