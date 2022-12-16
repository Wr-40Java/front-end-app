import React from "react"
import Page from "./Page"
import Register from "./Register";

function HomeGuest() {
  return (
    <Page title="Welcome!" wide={true}>
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Welcome!</h1>
          <p className="lead text-muted">This is a Car Diary Application!</p>
        </div>
        <Register/>
      </div>
    </Page>
  )
}

export default HomeGuest
