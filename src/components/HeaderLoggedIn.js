import React from "react"
import { Link, useNavigate } from "react-router-dom"

function HeaderLoggedIn(props) {
    const navigate = useNavigate();

    function handleLogOut() {
        props.setLoggedIn(false)
        localStorage.removeItem("idOfUser")
        localStorage.removeItem("nameOfUser")
        localStorage.removeItem("surnameOfUser")
        localStorage.removeItem("usernameOfUser")
        localStorage.removeItem("passwordOfUser")
        localStorage.removeItem("emailOfUser")
        localStorage.removeItem("phoneNumberOfUser")
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
