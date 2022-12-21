import React, {useEffect, useState} from "react"
import common_axios from '../Axios_default/Axios_default'
import Select from "react-select";

function TaxCreate() {
    const [taxTypeOptions, setTaxTypeOptions] = useState([])
    const [selected, setSelected] = useState([])
    const [show, setShow] = React.useState(false);
    let chosenTaxTypeId = 0;

    const [data, setData] = useState({
        costOfTransaction: ""
    })

    const handleSelect = (e) => {
        setSelected(e)
        chosenTaxTypeId = e.value;
        console.log(e)
        console.log(chosenTaxTypeId)
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const taxData = {
            costOfTransaction: data.costOfTransaction
        };
        common_axios.post("/tax", taxData)
            .then((response) => {
                console.log(response.status);
                setData({
                    ...data,
                    costOfTransaction: ""
                });
            })
            .catch((error) => {
                console.log(error)
                setShow(true);
            });
        // common_axios.get()   TO DO: изменить бэкэнд такса, чтобы сохраняло одновременно с подключенным такстайпом
    }

    useEffect(() => {
        const taxTypeArray = [];
        common_axios.get("/taxtype/list").then((response) => {
            response.data.map((taxType) => {
                return taxTypeArray.push({value: taxType.id, label: taxType.name});
            });
            setTaxTypeOptions(taxTypeArray)
        })
            .catch((error) => {
                console.log(error)
            });
    },[]);

    return (
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5 container">
            <h4>Here you can add new Tax.</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name-register" className="text-muted mb-1">
                        <small>Cost Of Transaction:</small>
                    </label>
                    <input id="name-register" name="costOfTransaction" className="form-control"
                           type="text" placeholder="Enter cost here" autoComplete="off"
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
                    Add
                </button>
            </form>
            {show ? <Error/> : null}
        </div>
    )
}

const Error = () => (
    <div id="results" className="search-results">
        <h4 className="text-danger">
            Check your data
        </h4>
    </div>
)

export default TaxCreate
