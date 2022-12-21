import React, { Component, useState, useEffect,useContext} from 'react'
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CurrencyFormat from 'react-currency-format';
import {useNavigate, Link} from 'react-router-dom';
import common_axios from '../Axios_default/Axios_default';
import {AuthContext} from '../../index'


const InsuranceType = () => {

const [InsTypes, setInsTypes] = useState([]);
const [show,setShow]= React.useState(false);
const [errorMsg, showErrorMsg]= React.useState(false);
const [headers, setHeaders] = React.useState(['Type','Description', 
'Costs per year', 'Covered compensation', 'Delete']);
const link = 'http://localhost:8080/api/insurancetype'
const navigate = useNavigate();
const context = useContext(AuthContext)
console.log(context);

    const redirectToDelete = (type) => (
        common_axios.delete(`/insurancetype/${type}`)
        .then((response) => {fetchInsTypes()})
        .catch((error) => setShow(true))
    )

    const redirectToMainPage = () => (navigate('/insurance_type'));

    useEffect(() => {
        fetchInsTypes()
    },[])

    const fetchInsTypes = () => {
        common_axios.get("insurancetype/list")
        .then(response => {setInsTypes(response.data)})
        .catch((error) => {
            console.log(error)
            showErrorMsg(true);
        });
    }

    return (
        <div id='wrapper' className='CRUD'>
            <div className='name-table'>
                <p>Available insurance types for {context.username}</p>
            </div>
            <div id='left'>
                <Link to={'/insurance_type/save'}>
                    <Button variant="success" className='react-bootstrap-button-success'>Add insurance type</Button>{' '} 
                </Link>
                { InsTypes.length > 0 &&
                <Link to={'/insurance_type/update'}>
                    <Button variant="warning"  className='react-bootstrap-button-warning'>Update</Button>{' '}
                </Link>
                }
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
                <td>{item.description || ''}</td>
                <td><CurrencyFormat value={item.costsPerYear} displayType={'text'} thousandSeparator={true} suffix={' $'} /></td>
                <td><CurrencyFormat value={item.coveredCompensation} displayType={'text'} thousandSeparator={true} suffix={' $'} /></td>
                <td onClick={() => redirectToDelete(item.type)} onMouseDown={redirectToMainPage}>
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


