import React from "react"
import {Link} from "react-router-dom";

function HeaderLoggedIn(props) {
  return (
        <div className="flex-row my-3 my-md-0">
            <Link className="btn btn-sm btn-success mr-4" to="/edit-profile">
                Edit Profile
            </Link>
            <button onClick={() => props.setLoggedIn(false)} className="btn btn-sm btn-secondary">
                Sign Out
            </button>
        </div>
  )
}

export default HeaderLoggedIn
