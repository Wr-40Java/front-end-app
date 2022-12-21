import React from "react"
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';


function ManageTaxType(props) {
    const navigate = useNavigate()

    return (
        <>
            <div className="col-lg-7 py-3 py-md-5">
                <p className="lead">Data of selected Tax Type:</p>
                <p>Name: <strong>{props.showedTaxType.name}</strong>.</p>
                <p>Institution: <strong>{props.showedTaxType.institutionToPayFor}</strong>.</p>
                <p>Phone number of institution: <strong>{props.showedTaxType.institutionToPayForPhoneNumber}</strong>.</p>
                <p>Description: <strong>{props.showedTaxType.description}</strong>.</p>
            </div>
            <div className="row row-cols-2">
                <Button variant="warning" onClick={() => props.setEdit(true)}>Edit</Button>
                <Button variant="danger" onClick={props.handleDelete} onMouseDown={() => (navigate("/tax_type"))}>Delete</Button>
            </div>
        </>
    )

}

export default ManageTaxType