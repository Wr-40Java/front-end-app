import React, {useEffect, useState} from "react"
import Page from "../Page"
import { Link } from "react-router-dom"
import Select from 'react-select'
import axios from "axios";
import SaveTaxType from "./SaveTaxType";

function ManageTaxType() {
    const [userOptions, setUserOptions] = useState([])
    const [selected, setSelected] = useState([])
    const [showedTaxType, setShowedTaxType] = useState({
        name:"No Data",
        institutionToPayFor:"No Data",
        institutionToPayForPhoneNumber:"No Data",
        description:"No Data"
    })

    const handleChange = (e) => {
        setSelected(e)
        axios.get(`/taxtype/${e.value}`).then((response) => {
            setShowedTaxType({
                ...showedTaxType,
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
                console.log(arr)
                setUserOptions(arr)
            });
        };
        getData();
    }, []);

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
                </div>
                <SaveTaxType/>
            </div>
        </Page>
    )
}

export default ManageTaxType
