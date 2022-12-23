import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import common_axios from '../Axios_default/Axios_default'

function EditTaxType(props) {
    const [show,setShow]= React.useState(false);

    const [data,setData] = useState({
        id: props.showedTaxType.id,
        name: props.showedTaxType.name,
        institutionToPayFor: props.showedTaxType.institutionToPayFor,
        institutionToPayForPhoneNumber: props.showedTaxType.institutionToPayForPhoneNumber,
        description: props.showedTaxType.description
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
            id: data.id,
            name: data.name,
            institutionToPayFor: data.institutionToPayFor,
            institutionToPayForPhoneNumber: data.institutionToPayForPhoneNumber,
            description: data.description
        };
        common_axios.put("/taxtype", taxTypeData)
            .then((response) => {
                console.log(response.status);
            })
            .catch((error) => {
                console.log(error)
                setShow(true);
            });
        props.setEdit(false)
        props.setPick(false)
        props.setSelected(null)
    }

    return (
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5 container">
            <h5>Here you can edit <strong>{data.name}</strong> Tax Type!</h5>
            <form onSubmit={handleSubmit}>
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
                    Update Tax Type
                </button>
                <Button onClick={() => props.setEdit(false)} variant="warning" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                    Abort Editing
                </Button>
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

export default EditTaxType
