import {useNavigate} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


const Register = () =>{
    const navigate = useNavigate();

    const [data,setData] = useState({
        name:"",
        surname:"",
        phoneNumber:"",
        username:"",
        email:"",
        password:"",
        url:"http://localhost:8080/api/user"
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
        const userData = {
            name: data.name,
            surname: data.surname,
            phoneNumber: data.phoneNumber,
            username: data.username,
            email: data.email,
            password: data.password
        };
        axios.post(data.url, userData)
            .then((response) => {
            console.log(response.status);
                navigate('/successfully/login');
        })
            .catch((error) => {
                console.log(error)
               setShow(true);
            });

    }
    return(
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
                    <label htmlFor="username-register" className="text-muted mb-1">
                        <small>Username</small>
                    </label>
                    <input id="username-register" name="username" className="form-control"
                           type="text" placeholder="Pick a username" autoComplete="off"
                           value={data.username} onChange={handleChange} />
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
                    Sign up
                </button>
            </form>
            {
                show?
                        <Error/>:
                    null
            }
        </div>
    );
};
const Error = () => (
    <div id="results" className="search-results">
        <h4 className="text-danger">
        Check your data
        </h4>
    </div>
)
export default Register;