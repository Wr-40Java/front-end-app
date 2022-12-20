import React, {useEffect, useState} from "react"
import Page from "../Page"
import { Link } from "react-router-dom"
import Select from 'react-select'
import axios from "axios";
import SaveTaxType from "./SaveTaxType";

function ManageTaxType() {
    const [userOptions, setUserOptions] = useState([])
    const [selects, setSelects] = useState(userOptions.value)

    const handleChange = (e) => {
        setSelects(e.value);
    };

    useEffect(() => {
        const getData = async () => {
            const arr = [];
            const obj = {};
            await axios.get("/taxtype/list").then((response) => {
                let result = response.data;
                result.map((taxType) => {
                    obj[taxType.name] = taxType;
                    return arr.push({value: taxType, label: taxType.name});
                });
                console.log(arr)
                console.log(obj)
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
                        isClearable options={userOptions}
                        onChange={handleChange}
                    />
                    <div className="col-lg-7 py-3 py-md-5">
                        {selects}
                    </div>
                </div>
                <SaveTaxType/>
            </div>
        </Page>
    )
}

export default ManageTaxType
