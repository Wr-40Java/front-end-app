import React, {useEffect, useState} from "react"
import Page from "../Page"
import { Link } from "react-router-dom"
import CreatableSelect from 'react-select/creatable'
import axios from "axios";
import SaveTaxType from "./SaveTaxType";

function ManageTaxType() {
    const [userOptions, setUserOptions] = useState([])

    useEffect(() => {
        const getData = async () => {
            const arr = [];
            await axios.get("/taxtype/list").then((response) => {
                let result = response.data;
                console.log(result)
                result.map((taxType) => {
                    return arr.push({value: taxType.name, label: taxType.name});
                });
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
                    <CreatableSelect
                        placeholder= "Select a Tax Type"
                        isClearable options={userOptions} />
                </div>
                <SaveTaxType/>
            </div>
        </Page>
    )
}

export default ManageTaxType
