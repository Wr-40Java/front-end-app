import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import * as BSIcons from "react-icons/bs"

function MaintenanceEvent() {
  const [event, setEvents] = useState([])

  useEffect(() => {
    loadEvent()
  }, [])

  const loadEvent = async () => {
    const result = await axios.get("http://localhost:8080/api/maintenance_event/")
    setEvents(result.data)
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <div className="MaintenanceEvent">
        <div className="py-4">
          <div>
            <h1>Maintenance event</h1>
            <div>
              <Link to={"/event/save"}>
                <button className="btn btn-success mx-2">
                  <BSIcons.BsPlusSquare />
                </button>{" "}
              </Link>
            </div>
          </div>

          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Cost</th>
                <th scope="col">Company Name</th>
                <th scope="col">Company Phone Number</th>
                <th scope="col">Description</th>
                <th scope="col">Next Visit</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {event.map((record, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{record.cost}</td>
                  <td>{record.companyResponsibleForName}</td>
                  <td>{record.companyResponsibleForPhoneNumber}</td>
                  <td>{record.description}</td>
                  <td>{record.nextVisitSchedule}</td>
                  <td>
                    <button className="btn btn-outline-primary mx-2">
                      <BSIcons.BsPencilSquare />
                    </button>
                    <button className="btn btn-danger mx-2">
                      <BSIcons.BsTrashFill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MaintenanceEvent
