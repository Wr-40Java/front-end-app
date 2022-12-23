import React, {useEffect, useState} from "react"
import Button from "react-bootstrap/Button"
import common_axios from '../Axios_default/Axios_default'
import Select from "react-select";

function TaxUpdate(props) {
    const [show,setShow]= React.useState(false);
    const [taxTypeOptions, setTaxTypeOptions] = useState([])
    const [selected, setSelected] = useState([])
    const [chosenTaxTypeId, setChosenTaxTypeId] = useState()

    const [data,setData] = useState({
        id: props.showedTax.id,
        costOfTransaction: props.showedTax.costOfTransaction,
        taxType: props.showedTax.taxType
    })

    const handleSelect = (e) => {
        setSelected(e)
        console.log(e)
        setChosenTaxTypeId(e.value)
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault()
        if (chosenTaxTypeId !== undefined) {
            const taxData = {
                id: data.id,
                costOfTransaction: data.costOfTransaction
            };
            await common_axios.put("/tax", taxData)
                .then((response) => {
                    console.log(response.status);
                })
                .catch((error) => {
                    console.log(error)
                    setShow(true);
                });

            await common_axios.post(`/tax/link/${data.id}/${chosenTaxTypeId}`)
                .then((response) => {
                    console.log(response.status);
                })
                .catch((error) => {
                    console.log(error)
                });
            props.setEdit(false)
        } else {
            setShow(true);
        }


    }

    useEffect(() => {
        const taxTypeArray = [];
        common_axios.get("/taxtype/list").then((response) => {
            response.data.map((taxType) => {
                return taxTypeArray.push({value: taxType.id, label: taxType.name});
            });
            setTaxTypeOptions(taxTypeArray);
        })
            .catch((error) => {
                console.log(error)
                setShow(true);
            });
    },[]);

    return (
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5 container">
            <h5>Here you can edit Tax <strong>№{data.id}</strong>!</h5>
            <p><strong>Remember</strong> that when updating the data, system <strong>create a new Tax with the biggest id</strong> and <strong>delete the old Tax</strong>.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name-register" className="text-muted mb-1">
                        <small>Cost Of Transaction:</small>
                    </label>
                    <input id="name-register" name="costOfTransaction" className="form-control"
                           type="number" placeholder="Enter cost here" autoComplete="off"
                           value={data.costOfTransaction} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name-register" className="text-muted mb-1">
                        <small>Choose available Tax Type:</small>
                    </label>
                    <Select
                        placeholder= "Select a Tax Type"
                        options={taxTypeOptions}
                        value={selected}
                        onChange={handleSelect}
                    />
                </div>
                <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                    Update Tax Type
                </button>
                <Button onClick={() => props.setEdit(false)} variant="warning" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                    Abort Editing
                </Button>
            </form>
            { show ? <Error/> : null }
        </div>
    )
}

const Error = () => (
    <div id="results" className="search-results">
        <h6 className="text-danger">
            Check input your data<br/>Don`t forget to choose Tax Type!
        </h6>
    </div>
)

export default TaxUpdate
