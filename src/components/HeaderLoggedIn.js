import React from "react"
import {Link} from "react-router-dom";

function HeaderLoggedIn(props) {
  return (
        <div className="flex-row my-3 my-md-0">
            <button onClick={() => props.setLoggedIn(false)} className="btn btn-sm btn-secondary">
                Sign Out
            </button>
        </div>
  )
}

export default HeaderLoggedIn
