import React, {useContext, useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom';
import common_axios from '../Axios_default/Axios_default';
import {AuthContext} from '../../index'


const TechnicalService = () => {

    const [TechService, setTechService] = useState([]);
    const [show, setShow] = React.useState(false);
    const [errorMsg, showErrorMsg] = React.useState(false);
    const [headers, setHeaders] = React.useState(['Cost', 'Company Responsible For',
        'Company Responsible For PhoneNumber', 'Reason', 'Description', 'Delete', 'Update']);
    const link = 'http://localhost:8080/api/technical_service/list'
    const navigate = useNavigate();
    const context = useContext(AuthContext)
    console.log(context);

    const redirectToDelete = () => (
        common_axios.delete(`/technical_service/${TechService.id}`)
            .then((response) => {
                fetchTechService()
            })
            .catch((error) => setShow(true))
    )

    const redirectToMainPage = () => (navigate('/technical_service'));

    useEffect(() => {
        fetchTechService()
    }, [])

    const fetchTechService = () => {
        common_axios.get(link)
            .then(response => {
                setTechService(response.data)
            })
            .then(response => console.log(response))
            .catch((error) => {
                console.log(error)
                showErrorMsg(true);
            });
    }

    return (
        <div id='wrapper' className='CRUD'>
            <div className='name-table'>
                <p>Technical services of {context.username} : </p>
            </div>
            <div id='left' className='CRUD'>
                    <Link to={'/technical_service/save'}>
                        <Button size={"sm"} variant="success" className='react-bootstrap-button-success'>Add
                            technical
                            service</Button>{' '}
                    </Link>
            </div>
            <div id='right'>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        {headers.map((header) => (
                            <th>{header}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {TechService && TechService.map((service) => (
                        <tr key={service.id}>
                            <td>{service.cost}</td>
                            <td>{service.companyResponsibleForName}</td>
                            <td>{service.companyResponsibleForPhoneNumber || ''}</td>
                            <td>{service.reason}</td>
                            <td>{service.description}</td>
                            <td><Button variant="danger" onClick={redirectToDelete}
                                        onMouseDown={() => redirectToMainPage}>Delete</Button></td>
                            <td><Button variant="warning" onClick={redirectToDelete}
                                        onMouseDown={() => redirectToMainPage}
                            >Update</Button></td>

                        </tr>
                    ))}
                    </tbody>

                </Table>

                {
                    errorMsg ?
                        <Error/> :
                        null
                }

            </div>
        </div>
    );
}

const Error = () => (
    <div id="results" className="search-results">
        <h3 className="text-danger">
            .
        </h3>
    </div>
)
export default TechnicalService


