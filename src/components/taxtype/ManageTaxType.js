import React, {useEffect, useState} from "react"
import Page from "../Page"
import Select from 'react-select'
import SaveTaxType from "./SaveTaxType";
import EditTaxType from "./EditTaxType";
import InfoTaxType from "./InfoTaxType";
import common_axios from '../Axios_default/Axios_default'

function ManageTaxType() {
    const [userOptions, setUserOptions] = useState([])
    const [selected, setSelected] = useState([])
    const [show,setShow]= React.useState(false);
    const [edit,setEdit]= React.useState(false);
    const [pick,setPick]= React.useState(false);

    const [showedTaxType, setShowedTaxType] = useState({
        id:"",
        name:"?",
        institutionToPayFor:"?",
        institutionToPayForPhoneNumber:"?",
        description:"?"
    })

    const handleChange = (e) => {
        setSelected(e)
        setEdit(false)
        setPick(true)
        common_axios.get(`/taxtype/${e.value}`).then((response) => {
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
            common_axios.get("/taxtype/list").then((response) => {
                response.data.map((taxType) => {
                    return arr.push({value: taxType.id, label: taxType.name});
                });
                setUserOptions(arr)
            })
                .catch((error) => {
                    console.log(error)
                });
        };
        getData().then()
    }, []);

    function handleDelete() {
        setEdit(false)
        setPick(false)
        if (showedTaxType.id !== "") {
            common_axios.delete(`/taxtype/${showedTaxType.id}`)
                .catch(() => setShow(true))
            setShowedTaxType({
                ...showedTaxType,
                id: "",
                name: "?",
                institutionToPayFor: "?",
                institutionToPayForPhoneNumber: "?",
                description: "?"
            })
            setSelected(null)
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
                    { pick ? <InfoTaxType showedTaxType={showedTaxType} setEdit={setEdit} handleDelete={handleDelete}/> : undefined }
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
