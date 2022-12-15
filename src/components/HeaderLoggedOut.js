import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Axios from "axios"

function HeaderLoggedOut(props) {
  const navigate = useNavigate();

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
      name: data.name,
      surname: data.surname,
      phoneNumber: data.phoneNumber,
      username: data.username,
      email: data.email,
      password: data.password
    };
    try {
      const response = await Axios.get(`/user/${userData.username}`)
      if (response.data.password === userData.password) {
        localStorage.setItem("idOfUser", response.data.id)
        localStorage.setItem("nameOfUser", response.data.name)
        localStorage.setItem("surnameOfUser", response.data.surname)
        localStorage.setItem("usernameOfUser", response.data.username)
        localStorage.setItem("passwordOfUser", response.data.password)
        localStorage.setItem("emailOfUser", response.data.email)
        localStorage.setItem("phoneNumberOfUser", response.data.phoneNumber)
        props.setLoggedIn(true)
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
