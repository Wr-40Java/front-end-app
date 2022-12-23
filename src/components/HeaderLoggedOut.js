import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Axios from "axios"
import base64 from 'react-native-base64'
import {AuthContext} from '../index'
import common_axios from "./Axios_default/Axios_default"

function HeaderLoggedOut(props) {
  const navigate = useNavigate();
  const {setLoggedIn, setUsername} = useContext(AuthContext)

  const [data,setData] = useState({
    name:"",
    surname:"",
    phoneNumber:"",
    username:"",
    email:"",
    password:"",
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  async function handleSubmit(e) {
    e.preventDefault()
    const userData = {
      username: data.username,
      password: data.password
    };
    var credentials = `${userData.username}:${userData.password}`;
    var encodedCredentials = base64.encode(credentials);
    var basicAuthCred = `Basic ${encodedCredentials}`;
    console.log(`Basic ${encodedCredentials}`);

    try {
      const response = await common_axios.get('insurancetype/list')
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("username", userData.username)
        localStorage.setItem("credentials", basicAuthCred)
        setLoggedIn(true)
        setUsername(userData.username)

        navigate("/")
      } else {
        console.log("Incorrect password!")
      }
    } catch (e) {
      console.log("Username not found!")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input onChange={handleChange} value={data.username} name="username" className="form-control form-control-sm input-dark" type="text" placeholder="Username" autoComplete="off" />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input onChange={handleChange} value={data.password} name="password" className="form-control form-control-sm input-dark" type="password" placeholder="Password" />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  )
}

export default HeaderLoggedOut
