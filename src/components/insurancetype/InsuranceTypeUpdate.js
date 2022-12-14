import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import axios from "axios";
import InsuranceTypeSelect from './InsuranceTypeSelect'
import InsuranceType from './InsuranceType';

const InsuranceTypeUpdate = () => {
    const navigate = useNavigate();
    const [show,setShow]= React.useState(false);
    const [errorMsg, showErrorMsg]= React.useState(false);
    const [InsTypes, setInsTypes] = useState([]);
    const [fetchedTypes, setFetchedTypes] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/api/insurancetype/list")
            .then((response) => response.json())
            .then(obj => console.log(obj))
            .then(response => {setInsTypes(response); setFetchedTypes(true)},
                (error) => {
                    showErrorMsg(true);
            });
        },[])

    const [data,setData] = useState({
        type:"",
        description:"",
        costsPerYear:0,
        coveredCompensation:0,
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
        const insCompData = {
            type: data.type,
            description: data.description,
            costsPerYear: data.costsPerYear,
            coveredCompensation: data.coveredCompensation,
        };
        axios.put("http://localhost:8080/api/insurancetype", insCompData)
            .then((response) => {
            console.log(response.status);
                navigate('/insurancetype');
        })
            .catch((error) => {
                console.log(error)
               setShow(true);
            });

    }
    return(
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5 container">
            {/* {fetchedTypes && <InsuranceTypeSelect insTypes={items} handleChange={this.handleChange} /> } */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="surname-register" className="text-muted mb-1">
                        <small>Description</small>
                    </label>
                    <input id="surname-register" name="description" className="form-control"
                           type="text" placeholder="New description" autoComplete="off"
                           value={data.description} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone-number-register" className="text-muted mb-1">
                        <small>CostsPerYear</small>
                    </label>
                    <input id="phone-number-register" name="costsPerYear" className="form-control"
                           type="text" placeholder="Your phone number" autoComplete="off"
                           value={data.costsPerYear} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="username-register" className="text-muted mb-1">
                        <small>Covered compensation</small>
                    </label>
                    <input id="username-register" name="coveredCompensation" className="form-control"
                           type="text" placeholder="Pick a username" autoComplete="off"
                           value={data.coveredCompensation} onChange={handleChange} />
                </div>
                <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                    Update
                </button>
            </form>
            {
                show?
                        <Error/>:
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
export default InsuranceTypeUpdate