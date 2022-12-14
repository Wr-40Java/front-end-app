import {useNavigate} from 'react-router-dom';
import React, {useState} from "react";
import Page from "./Page";
import Axios from "axios";


function EditProfile() {
    const navigate = useNavigate();

    const [data,setData] = useState({
        name: "",
        surname:"",
        phoneNumber:"",
        username:`${localStorage.getItem("usernameOfUser")}`,
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

    async function handleSubmit(e) {
        e.preventDefault();
        const userData = {
            name: data.name,
            surname: data.surname,
            phoneNumber: data.phoneNumber,
            username: data.username,
            email: data.email,
            password: data.password
        };
        await Axios.put("/user", userData)
            .then((response) => {
                console.log(response.status);
                localStorage.setItem("nameOfUser", response.data.name)
                localStorage.setItem("surnameOfUser", response.data.surname)
                localStorage.setItem("passwordOfUser", response.data.password)
                localStorage.setItem("emailOfUser", response.data.email)
                localStorage.setItem("phoneNumberOfUser", response.data.phoneNumber)
                navigate('/edit-profile-success');
            })
            .catch((error) => {
                console.log(error)
                setShow(true);
            });
    }

    return(
        <Page title="Edit Profile" wide={true}>
            <div className="row align-items-center">
                <div className="col-lg-7 py-3 py-md-5">
                    <h1>Here you can edit your profile!</h1>
                    <p className="lead">Your profile details are shown here:</p>
                    <p>Name: <strong>{localStorage.getItem("nameOfUser")}</strong>.</p>
                    <p>Surname: <strong>{localStorage.getItem("surnameOfUser")}</strong>.</p>
                    <p>Phone number: <strong>{localStorage.getItem("phoneNumberOfUser")}</strong>.</p>
                    <p>Email: <strong>{localStorage.getItem("emailOfUser")}</strong>.</p>
                    <p>Password: <strong>{localStorage.getItem("passwordOfUser")}</strong>.</p>
                </div>
                <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name-register" className="text-muted mb-1">
                                <small>Name</small>
                            </label>
                            <input id="name-register" name="name" className="form-control"
                                   type="text" placeholder="New name" autoComplete="off"
                                   value={data.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname-register" className="text-muted mb-1">
                                <small>Surname</small>
                            </label>
                            <input id="surname-register" name="surname" className="form-control"
                                   type="text" placeholder="New surname" autoComplete="off"
                                   value={data.surname} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone-number-register" className="text-muted mb-1">
                                <small>Phone Number</small>
                            </label>
                            <input id="phone-number-register" name="phoneNumber" className="form-control"
                                   type="text" placeholder="New phone number" autoComplete="off"
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
                                   type="password" placeholder="Create a new password"
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
            Check your input data!
        </h4>
    </div>
)
export default EditProfile;