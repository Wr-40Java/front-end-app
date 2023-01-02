import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import Page from "../Page";
import common_axios from '../Axios_default/Axios_default'


function EditProfile() {
    const navigate = useNavigate();
    const  [show,setShow]= React.useState(false);

    const [data,setData] = useState({
        name: "",
        surname: "",
        phoneNumber: "",
        username: "",
        email: "",
        password: ""
    })

    const [userInfo, setUserInfo] = useState({
        name: "?",
        surname: "?",
        phoneNumber: "?",
        email: "?"
    })

    useEffect( () => {
        common_axios.get(`/user/${localStorage.getItem('username')}`)
            .then((response) => {
                setUserInfo({
                    ...userInfo,
                    name: response.data.name,
                    surname: response.data.surname,
                    phoneNumber: response.data.phoneNumber,
                    email: response.data.email,
                })
                setData({
                    ...data,
                    username: response.data.username,
                    password: response.data.password
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        const userData = {
            name: data.name,
            surname: data.surname,
            phoneNumber: data.phoneNumber,
            username: data.username,
            email: data.email,
            password: data.password
        };
        common_axios.put("/user", userData)
            .then((response) => {
                console.log(response.status);
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
                    <p>Name: <strong>{userInfo.name}</strong>.</p>
                    <p>Surname: <strong>{userInfo.surname}</strong>.</p>
                    <p>Phone number: <strong>{userInfo.phoneNumber}</strong>.</p>
                    <p>Email: <strong>{userInfo.email}</strong>.</p>
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
                                   type="number" placeholder="New phone number" autoComplete="off"
                                   value={data.phoneNumber} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email-register" className="text-muted mb-1">
                                <small>Email</small>
                            </label>
                            <input id="email-register" name="email" className="form-control"
                                   type="email" placeholder="you@example.com" autoComplete="off"
                                   value={data.email} onChange={handleChange} />
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
}
const Error = () => (
    <div id="results" className="search-results">
        <h4 className="text-danger">
            Check your input data!
        </h4>
    </div>
)
export default EditProfile;