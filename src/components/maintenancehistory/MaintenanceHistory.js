import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"

function MaintenanceHistory() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    loadHistory()
  }, [])

  const loadHistory = async () => {
    const result = await axios.get("http://localhost:8080/api/maintenance_event/")
    setHistory(result.data)
  }

  return (
    <div className="MaintenanceHistory">
      <div className="py-4">
        <h1>Insurance History</h1>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cost</th>
              <th scope="col">Company Responsible For</th>
              <th scope="col">Company Phone Number</th>
              <th scope="col">Description</th>
              <th scope="col">Next Visit</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {history.map((record, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{record.cost}</td>
                <td>{record.companyResponsibleForName}</td>
                <td>{record.companyResponsibleForPhoneNumber}</td>
                <td>{record.description}</td>
                <td>{record.nextVisitSchedule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MaintenanceHistory
