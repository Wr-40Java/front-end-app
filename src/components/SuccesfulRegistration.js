
import React from "react"
import Page from "./Page"
function SuccessfulRegistration() {
    return (
        <Page title="Welcome!" wide={true}>
            <div className="d-flex justify-content-center">
                <div>
                    <h1 className="display-3">Successful Registration</h1>
                    <p className="h3 text-center">Now you can log in </p>
                </div>
            </div>
        </Page>
    )
}

export default SuccessfulRegistration;
