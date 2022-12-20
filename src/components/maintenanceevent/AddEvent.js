import { useNavigate, Link } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React, { useEffect } from "react"

function AddEvent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">New event</h2>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Cost
            </label>
            <input type={"text"} className="form-control" placeholder="Cost" cost="cost" />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Company Name
            </label>
            <input type={"text"} className="form-control" placeholder="Company Name" cost="company_name" />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Company Phone Number
            </label>
            <input type={"text"} className="form-control" placeholder="Company Phone Number" cost="company_phone_number" />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Description
            </label>
            <input type={"text"} className="form-control" placeholder="Description" cost="description" />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Next Visit Schedule
            </label>
            <input type={"text"} className="form-control" placeholder="Next Visit Schedule" cost="next_visit_schedule" />
          </div>
          <div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>

            <Link to={"/event"}>
              <button type="cancel" className="btn btn-danger mx-2">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEvent
