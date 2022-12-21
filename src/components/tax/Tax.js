import React, {useEffect, useState} from "react"
import Page from "../Page"
import Select from 'react-select'
import TaxCreate from "./TaxCreate";
import TaxUpdate from "./TaxUpdate";
import common_axios from '../Axios_default/Axios_default'

function Tax() {
    const [userOptions, setUserOptions] = useState([])
    const [selected, setSelected] = useState([])
    const [show,setShow]= React.useState(false);
    const [edit,setEdit]= React.useState(false);
    const [pick,setPick]= React.useState(false);

    const [showedTax, setShowedTax] = useState({
        costOfTransaction:""
    })

    const handleChange = (e) => {
        setSelected(e)
        setEdit(false)
        setPick(true)
        common_axios.get(`/tax/${e.value}`).then((response) => {
            setShowedTax({
                ...showedTax,
                costOfTransaction: response.data.costOfTransaction
            })
        })
    };

    useEffect(() => {
        const getData = async () => {
            const arr = [];
            common_axios.get("/tax/list").then((response) => {
                response.data.map((tax) => {
                    return arr.push({value: tax.id, label: tax.costOfTransaction});
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
        if (showedTax.id !== "") {
            common_axios.delete(`/tax/${showedTax.id}`)
                .catch(() => setShow(true))
            setShowedTax({
                ...showedTax,
                id: "",
                costOfTransaction: "?",
            })
            setSelected(null)
        }
    }

    return (
        <Page title="Choose tax" wide={true}>
            <h2 className="text-center">Here you can change your tax!</h2>
            <div className="row">
                <div className="col-lg-7 py-3 py-md-5">
                    <p>The available Tax are shown here. <strong>Select</strong> the required one from <strong>the list</strong> or <strong>create</strong> a new one.</p>
                    <Select
                        placeholder= "Select a Tax"
                        options={userOptions}
                        value={selected}
                        onChange={handleChange}
                    />
                    { pick ? <Tax showedTax={showedTax} setEdit={setEdit} handleDelete={handleDelete}/> : undefined }
                </div>
                { edit ? <TaxUpdate showedTax={showedTax} setShowedTax={setShowedTax} setEdit={setEdit}/> : <TaxCreate/>}
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
export default Tax
