import React, {useContext} from "react"
import context from "react-bootstrap/esm/AccordionContext";
import { Link, useNavigate } from "react-router-dom"
import {AuthContext} from '../index'

function HeaderLoggedIn(props) {
    const navigate = useNavigate();
    const {setLoggedIn, setUsername} = useContext(AuthContext);


    function handleLogOut() {
        localStorage.removeItem('credentials')
        localStorage.removeItem('username')
        setLoggedIn(false)
        setUsername(false)
        props.setLoggedIn(false)
        localStorage.removeItem("appUserId")
        localStorage.removeItem("appUserName")
        localStorage.removeItem("appUserSurname")
        localStorage.removeItem("appUserUsername")
        localStorage.removeItem("appUserPassword")
        localStorage.removeItem("appUserEmail")
        localStorage.removeItem("appUserPhoneNumber")
        localStorage.removeItem("usernameOfUser")
        navigate("/")
    }

    return (
        <div className="flex-row my-3 my-md-0">
            <Link className="btn btn-sm btn-success mr-4" to="/edit-profile">
                Edit Profile
            </Link>
            <button onClick={handleLogOut} className="btn btn-sm btn-secondary">
                Sign Out
            </button>
        </div>
    )
}

export default HeaderLoggedIn
