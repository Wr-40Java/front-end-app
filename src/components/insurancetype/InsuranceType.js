import React, { Component, useState, useEffect} from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CurrencyFormat from 'react-currency-format';
import {useNavigate, Link} from 'react-router-dom';

const InsuranceType = () => {

const [InsTypes, setInsTypes] = useState([]);
const [show,setShow]= React.useState(false);
const [errorMsg, showErrorMsg]= React.useState(false);
const [headers, setHeaders] = React.useState(['Type','Description', 
'Costs per year', 'Covered compensation', 'Delete']);
const link = 'http://localhost:8080/api/insurance_type'
const navigate = useNavigate();

    const redirectToDelete = (type) => (
        axios.delete(`${link}/${type}`)
        .then((response) => {navigate('/insurance_type')})
        .catch((error) => setShow(true))
    )

    useEffect(() => {
    fetch("http://localhost:8080/api/insurancetype/list")
        .then((response) => response.json())
        .then(response => {setInsTypes(response)},
            (error) => {
                showErrorMsg(true);
        });
    },[])

    return (
        <div id='wrapper' className='CRUD'>
            <div className='name-table'>
                <p>Available insurance types</p>
            </div>
            <div id='left'>
                <Link to={'/insurance_type/save'}>
                    <Button variant="success" className='react-bootstrap-button-success'>Add insurance type</Button>{' '} 
                </Link>
                <Link to={'/insurance_type/update'}>
                    <Button variant="warning"  className='react-bootstrap-button-warning'>Update</Button>{' '}
                </Link>
            </div>
            <div id='right'>
            <Table striped bordered hover>
            <tr>
            {headers.map((header) => (
                <th>{header}</th>
            ))}
            </tr>
            {InsTypes.map((item) => (
            <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.description}</td>
                <td><CurrencyFormat value={item.costsPerYear} displayType={'text'} thousandSeparator={true} suffix={' $'} /></td>
                <td><CurrencyFormat value={item.coveredCompensation} displayType={'text'} thousandSeparator={true} suffix={' $'} /></td>
                <td onClick={() => redirectToDelete(item.type)}>
                    <Button variant="danger">Delete</Button>{' '}
                </td>
            </tr>
            ))}
            </Table>

        {
            errorMsg?
                    <Error/>:
                null
        }

        </div>
     </div>
     );
}

const Error = () => (
    <div id="results" className="search-results">
        <h4 className="text-danger">
        Check your data
        </h4>
    </div>
)
export default InsuranceType