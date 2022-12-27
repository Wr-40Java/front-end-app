import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import InsuranceType from './InsuranceType';
import { useFormik, useField, Form, Field, Formik } from 'formik';
import { BasicFormValidation } from './BasicFormValidation';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import common_axios from '../Axios_default/Axios_default';

const InsuranceTypeUpdate = () => {

    const navigate = useNavigate();
    const [InsTypes, setInsTypes] = useState([]);
    const [fetchedTypes, setFetchedTypes] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [errorMsg, showErrorMsg] = useState(false);

    useEffect(() => {
        common_axios.get("/insurancetype/list")
            .then(response => { setInsTypes(response.data); setFetchedTypes(true); }) 
            .catch((error) => {
                showErrorMsg(true);
                setFetchedTypes(false);
            });
    }, [])

    const onSubmit = async (values, actions) => {
        console.log('sent');
        console.log(values);
        console.log(actions);
            setIsSending(true);
            common_axios.put("/insurancetype", values)
            .then((response) => {
                console.log(response.status);
                setFetchedTypes(false);
                navigate('/insurance_type');
            })
            .catch((error) => {
                showErrorMsg(true);
                setFetchedTypes(false);
            });
            setIsSending(false);
            actions.resetForm();
    }

    return (
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5 container">
            { fetchedTypes &&
            <Formik initialValues={{
                type: InsTypes[0].type,
                description: '',
                costsPerYear: '',
                coveredCompensation: ''
                }}
                validationSchema = {BasicFormValidation}
                onSubmit={onSubmit}>
            {(props) => (
                    <Form>
                        <CustomSelect label='Type to update' name='type' placeholder='choose type to update' >
                            {InsTypes.map((object, index) => (
                            <option key={index} value={object.type}>
                                {object.type}
                            </option>
                            ))}                    
                        </CustomSelect> <br></br>
                        <CustomInput label='Description' name='description' type='text' placeholder='Enter description here'></CustomInput><br></br>
                        <CustomInput label='Costs per year' name='costsPerYear' type='text' placeholder='Enter costs per year here'></CustomInput><br></br>
                        <CustomInput label='Covered compensation' name='coveredCompensation' type='text' placeholder='Enter covered compensation here'></CustomInput>
                        <button type="submit" disabled={isSending} className="py-3 mt-4 btn btn-lg btn-success btn-block">Update</button>
                </Form>
            )}
            </Formik>
            }
        
            {
                errorMsg && <Error/> 
            }
        </div >


    // const { values, errors, isSubmitting, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    // initialValues: {
    //     type: '',
    //     description: '',
    //     costsPerYear: '',
    //     coveredCompensation: ''
    // },
    //     validationSchema: BasicFormValidation,
    //     onSubmit
    // });


        // const [data,setData] = useState({
        //     type: "",
        //     description:"",
        //     costsPerYear:0,
        //     coveredCompensation:0,
        // })


        // const handleChange = (e) => {
        //     const value = e.target.value;
        //     setData({
        //         ...data,
        //         [e.target.name]: value
        //     });
        // };
        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     const insCompData = {
        //         type: data.type,
        //         description: data.description,
        //         costsPerYear: data.costsPerYear,
        //         coveredCompensation: data.coveredCompensation,
        //     };
        //     axios.put("http://localhost:8080/api/insurancetype", insCompData)
        //         .then((response) => {
        //         console.log(response.status);
        //         console.log(insCompData);
        //          navigate('/insurance_type');
        //     })
        //         .catch((error) => {
        //             console.log(error)
        //            setShow(true);
        //         });
        // }




        // <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5 container">
        //     {fetchedTypes && <InsuranceTypeSelect insTypes={InsTypes} handleChange={handleChange} defaultValue={InsTypes[0]} setDataHook={setData} /> }
        //     <form onSubmit={handleSubmit}>
        //         <div className="form-group">
        //             <label htmlFor="surname-register" className="text-muted mb-1">
        //                 <small>Description</small>
        //             </label>
        //             <input id="surname-register" name="description" className="form-control"
        //                    type="text" placeholder="New description" autoComplete="off"
        //                    value={data.description} onChange={handleChange} />
        //         </div>
        //         <div className="form-group">
        //             <label htmlFor="phone-number-register" className="text-muted mb-1">
        //                 <small>CostsPerYear</small>
        //             </label>
        //             <input id="phone-number-register" name="costsPerYear" className="form-control"
        //                    type="text" placeholder="Your phone number" autoComplete="off"
        //                    value={data.costsPerYear} onChange={handleChange} />
        //         </div>
        //         <div className="form-group">
        //             <label htmlFor="username-register" className="text-muted mb-1">
        //                 <small>Covered compensation</small>
        //             </label>
        //             <input id="username-register" name="coveredCompensation" className="form-control"
        //                    type="text" placeholder="Pick a username" autoComplete="off"
        //                    value={data.coveredCompensation} onChange={handleChange} />
        //         </div>
        //         <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
        //             Update
        //         </button>
        //     </form>
        // </div>
    );
};

    const Error = () => (
    <div id="results" className="search-results">
        <h4 className="text-danger">
            Server error occured
        </h4>
    </div>
    )

export default InsuranceTypeUpdate