import React, { Component, useState, useEffect} from 'react'
import axios from "axios";
import InsuranceTypeItem from './InsuranceTypeItem'

const InsuranceType = () => {

const [InsTypes, setInsTypes] = useState([]);
const [errorMsg, showErrorMsg]= React.useState(false);

    useEffect(() => {
    fetch("http://localhost:8080/api/insurancetype/list")
        .then((response) => response.json())
        .then(response => {setInsTypes(response)},
            (error) => {
                showErrorMsg(true);
        });
    },[])

    return InsTypes.map(item => (
      <div className='container'>
        <InsuranceTypeItem id="InsTypes.id"/>


      {
        errorMsg?
                <Error/>:
            null
     }

     </div>
     ));
}

const Error = () => (
    <div id="results" className="search-results">
        <h4 className="text-danger">
        Check your data
        </h4>
    </div>
)
export default InsuranceType