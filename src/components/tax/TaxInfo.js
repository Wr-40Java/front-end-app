import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";

function TaxInfo(props) {
    const navigate = useNavigate()

    return (
        <>
            <div className="col-lg-7 py-3 py-md-5">
                <p className="lead">Data of selected Tax:</p>
                <p>Cost of transaction: <strong>{props.showedTax.costOfTransaction}$</strong>.</p>
                <p>Name of Tax Type: <strong>{props.showedTax.taxType.name}</strong>.</p>
                <ul>
                    <li>Institution: <strong>{props.showedTax.taxType.institutionToPayFor}</strong>.</li>
                    <li>Phone number of institution: <strong>{props.showedTax.taxType.institutionToPayForPhoneNumber}</strong>.</li>
                    <li>Description: <strong>{props.showedTax.taxType.description}</strong>.</li>
                </ul>
            </div>
            <div className="row row-cols-2">
                <Button variant="warning" onClick={() => props.setEdit(true)}>Edit</Button>
                <Button variant="danger" onClick={props.handleDelete} onMouseDown={() => (navigate("/tax"))}>Delete</Button>
            </div>
        </>
    )

}

export default TaxInfo