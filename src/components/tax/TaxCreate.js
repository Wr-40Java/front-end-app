import React, {useState} from "react"
import common_axios from '../Axios_default/Axios_default'

function TaxCreate() {
    const [show, setShow] = React.useState(false);

    const [data, setData] = useState({
        costOfTransaction: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.costOfTransaction]: value
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
                    costOfTransaction: 0
                });
            })
            .catch((error) => {
                console.log(error)
                setShow(true);
            });
    }

    return (
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5 container">
            <h4>Here you can add new Tax.</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name-register" className="text-muted mb-1">
                        <small>Cost Of Transaction:</small>
                    </label>
                    <input id="name-register" name="name" className="form-control"
                           type="text" placeholder="Enter cost here" autoComplete="off"
                           value={data.name} onChange={handleChange}/>
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
