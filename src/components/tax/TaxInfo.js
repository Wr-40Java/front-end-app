import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";

function TaxInfo() {
    const navigate = useNavigate()

    return (
        <>
            <div className="col-lg-7 py-3 py-md-5">
                <p className="lead">Data of selected Tax Type:</p>
                <p>Name: <strong>x</strong>.</p>
                <p>Institution: <strong>x</strong>.</p>
                <p>Phone number of institution: <strong>x</strong>.</p>
                <p>Description: <strong>x</strong>.</p>
            </div>
            {/*<div className="row row-cols-2">*/}
            {/*    <Button variant="warning" onClick={() => props.setEdit(true)}>Edit</Button>*/}
            {/*    <Button variant="danger" onClick={props.handleDelete} onMouseDown={() => (navigate("/tax_type"))}>Delete</Button>*/}
            {/*</div>*/}
        </>
    )

}

export default TaxInfo