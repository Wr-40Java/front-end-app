import React from "react"
import Page from "./Page"

function HomeGuest() {
  return (
    <Page title="Welcome!" wide={true}>
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Welcome!</h1>
          <p className="lead text-muted">This is a Car Diary Application!</p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form>
            <div className="form-group">
              <label htmlFor="name-register" className="text-muted mb-1">
                <small>Name</small>
              </label>
              <input id="name-register" name="name" className="form-control" type="text" placeholder="Your name" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="surname-register" className="text-muted mb-1">
                <small>Surname</small>
              </label>
              <input id="surname-register" name="surname" className="form-control" type="text" placeholder="Your surname" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="phone-number-register" className="text-muted mb-1">
                <small>Phone Number</small>
              </label>
              <input id="phone-number-register" name="phone-number" className="form-control" type="text" placeholder="Your phone number" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input id="username-register" name="username" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
            </div>
            <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default HomeGuest
