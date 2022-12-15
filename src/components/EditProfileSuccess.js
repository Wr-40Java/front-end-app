import React from "react"
import Page from "./Page"
import { Link } from "react-router-dom"

function EditProfileSuccess() {
    return (
        <Page title="Success!">
            <div className="text-center">
                <h2>We successfully update your profile!</h2>
                <p className="lead text-muted">
                    Now you can return to the <Link to="/">homepage</Link>.
                </p>
            </div>
        </Page>
    )
}

export default EditProfileSuccess