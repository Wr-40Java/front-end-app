import React, {useEffect, useState} from "react"
import Page from "../Page"
import Select from 'react-select'
import axios from "axios";
import SaveTaxType from "./SaveTaxType";
import EditTaxType from "./EditTaxType";
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';

function ManageTaxType() {
    const navigate = useNavigate()
    const [userOptions, setUserOptions] = useState([])
    const [selected, setSelected] = useState([])
    const [show,setShow]= React.useState(false);
    const [edit,setEdit]= React.useState(false);

    const [showedTaxType, setShowedTaxType] = useState({
        id:"",
        name:"?",
        institutionToPayFor:"?",
        institutionToPayForPhoneNumber:"?",
        description:"?"
    })

    const handleChange = (e) => {
        setSelected(e)
        axios.get(`/taxtype/${e.value}`).then((response) => {
            setShowedTaxType({
                ...showedTaxType,
                id: response.data.id,
                name: response.data.name,
                institutionToPayFor: response.data.institutionToPayFor,
                institutionToPayForPhoneNumber: response.data.institutionToPayForPhoneNumber,
                description: response.data.description
            })
        })
    };

    useEffect(() => {
        const getData = async () => {
            const arr = [];
            axios.get("/taxtype/list").then((response) => {
                let result = response.data;
                result.map((taxType) => {
                    return arr.push({value: taxType.id, label: taxType.name});
                });
                setUserOptions(arr)
            })
                .catch((error) => {
                    console.log(error)
                });
        };
        getData()
    }, []);

    function handleDelete(id) {
        setEdit(false)
        if (id !== "") {
            axios.delete(`/taxtype/${id}`)
                .catch((error) => setShow(true))
            setShowedTaxType({
                ...showedTaxType,
                id: "",
                name: "?",
                institutionToPayFor: "?",
                institutionToPayForPhoneNumber: "?",
                description: "?"
            })
            setSelected(undefined)
        }
    }

    return (
        <Page title="Manage Tax Type" wide={true}>
            <h2 className="text-center">Here you can manage your tax types!</h2>
            <div className="row">
                <div className="col-lg-7 py-3 py-md-5">
                    <p>The available Tax Types are shown here. <strong>Select</strong> the required one from <strong>the list</strong> or <strong>create</strong> a new one.</p>
                    <Select
                        placeholder= "Select a Tax Type"
                        options={userOptions}
                        value={selected}
                        onChange={handleChange}
                    />
                    <div className="col-lg-7 py-3 py-md-5">
                        <p className="lead">Data of selected Tax Type:</p>
                        <p>Name: <strong>{showedTaxType.name}</strong>.</p>
                        <p>Institution: <strong>{showedTaxType.institutionToPayFor}</strong>.</p>
                        <p>Phone number of institution: <strong>{showedTaxType.institutionToPayForPhoneNumber}</strong>.</p>
                        <p>Description: <strong>{showedTaxType.description}</strong>.</p>
                    </div>
                    <div className="row row-cols-2">
                        <Button variant="warning" onClick={() => setEdit(true)}>Edit</Button>
                        <Button variant="danger" onClick={handleDelete} onMouseDown={() => (navigate("/tax_type"))}>Delete</Button>
                    </div>
                </div>
                { edit ? <EditTaxType showedTaxType={showedTaxType} setShowedTaxType={setShowedTaxType} setEdit={setEdit}/> : <SaveTaxType/>}
                { show ? <Error/> : null }
            </div>
        </Page>
    )
}

const Error = () => (
    <div id="results" className="search-results">
        <h4 className="text-danger">
            Check your data
        </h4>
    </div>
)
export default ManageTaxType
