import React, { useState } from "react"
import common_axios from '../Axios_default/Axios_default'

function SaveTaxType() {
    const [show,setShow]= React.useState(false);

    const [data,setData] = useState({
        name:"",
        institutionToPayFor:"",
        institutionToPayForPhoneNumber:"",
        description:""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const taxTypeData = {
            name: data.name,
            institutionToPayFor: data.institutionToPayFor,
            institutionToPayForPhoneNumber: data.institutionToPayForPhoneNumber,
            description: data.description
        };
        common_axios.post("/taxtype", taxTypeData)
            .then((response) => {
                console.log(response.status);
                setData({
                    ...data,
                    name:"",
                    institutionToPayFor:"",
                    institutionToPayForPhoneNumber:"",
                    description:""});
            })
            .catch((error) => {
                console.log(error)
                setShow(true);
            });
    }

    return (
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5 container">
            <h4>Here you can create new Tax Type!</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name-register" className="text-muted mb-1">
                        <small>Type:</small>
                    </label>
                    <input id="name-register" name="name" className="form-control"
                           type="text" placeholder="New name" autoComplete="off"
                           value={data.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email-register" className="text-muted mb-1">
                        <small>Institution to pay for:</small>
                    </label>
                    <input id="email-register" name="institutionToPayFor" className="form-control"
                           type="text" placeholder="Fill institution" autoComplete="off"
                           value={data.institutionToPayFor} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone-number-register" className="text-muted mb-1">
                        <small>Phone Number of Institution:</small>
                    </label>
                    <input id="phone-number-register" name="institutionToPayForPhoneNumber" className="form-control"
                           type="number" placeholder="Fill phone number" autoComplete="off"
                           value={data.institutionToPayForPhoneNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="surname-register" className="text-muted mb-1">
                        <small>Description:</small>
                    </label>
                    <input id="surname-register" name="description" className="form-control"
                           type="text" placeholder="Small description" autoComplete="off"
                           value={data.description} onChange={handleChange} />
                </div>
                <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                    Save
                </button>
            </form>
            { show ? <Error/> : null }
        </div>
    )
}

const Error = () => (
    <div id="results" className="search-results">
        <h4 className="text-danger">
            Check your data
        </h4>
    </div>
)

export default SaveTaxType
