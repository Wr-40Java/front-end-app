import {useNavigate} from 'react-router-dom';
import React, {useState} from "react";
import Page from "./Page";
import Axios from "axios";


const EditProfile = () =>{
    const navigate = useNavigate();

    const [data,setData] = useState({
        name: "",
        surname:"",
        phoneNumber:"",
        username:"",
        email:"",
        password:""
    })

    const [loadedData,setLoadedData] = useState({
        name: "",
        surname:"",
        phoneNumber:"",
        username:"",
        email:"",
        password:""
    })

    const  [show,setShow]= React.useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Axios.put("/user", userData)
        //     .then((response) => {
        //         console.log(response.status);
        //         navigate('/successfull/login');
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //         setShow(true);
        //     });

    }

    async function loadData(e) {
        e.preventDefault()
        const userData = {
            name: data.name,
            surname: data.surname,
            phoneNumber: data.phoneNumber,
            username: data.username,
            email: data.email,
            password: data.password
        };
        try {
            setLoadedData(await Axios.get(`/user/${userData.username}`))
        } catch (e) {
            console.log("There was a problem.")
        }
    }
    return(
        <Page onLoad={loadData} title="Edit Profile" wide={true}>
            <div className="row align-items-center">
                <div className="col-lg-7 py-3 py-md-5">
                    <h1>Here you can edit your profile!</h1>
                    <p className="lead">Your profile details are shown here:</p>
                    <p>Name: {loadedData.name}.</p>
                    <p>Surname: {loadedData.surname}.</p>
                    <p>Phone number: {loadedData.phoneNumber}.</p>
                    <p>Email: {loadedData.email}.</p>
                    <p>Password: {loadedData.password}.</p>
                </div>
                <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name-register" className="text-muted mb-1">
                                <small>Name</small>
                            </label>
                            <input id="name-register" name="name" className="form-control"
                                   type="text" placeholder="Your name" autoComplete="off"
                                   value={data.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname-register" className="text-muted mb-1">
                                <small>Surname</small>
                            </label>
                            <input id="surname-register" name="surname" className="form-control"
                                   type="text" placeholder="Your surname" autoComplete="off"
                                   value={data.surname} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone-number-register" className="text-muted mb-1">
                                <small>Phone Number</small>
                            </label>
                            <input id="phone-number-register" name="phoneNumber" className="form-control"
                                   type="text" placeholder="Your phone number" autoComplete="off"
                                   value={data.phoneNumber} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email-register" className="text-muted mb-1">
                                <small>Email</small>
                            </label>
                            <input id="email-register" name="email" className="form-control"
                                   type="text" placeholder="you@example.com" autoComplete="off"
                                   value={data.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-register" className="text-muted mb-1">
                                <small>Password</small>
                            </label>
                            <input id="password-register" name="password" className="form-control"
                                   type="password" placeholder="Create a password"
                                   value={data.password} onChange={handleChange}/>
                        </div>
                        <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
                            Confirm Edit
                        </button>
                    </form>
                    { show ? <Error/> : null }
                </div>
            </div>
        </Page>
    );
};
const Error = () => (
    <div id="results" className="search-results">
        <h4 className="text-danger">
            Check your data
        </h4>
    </div>
)
export default EditProfile;