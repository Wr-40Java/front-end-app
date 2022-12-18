import React, {useState} from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Axios from "axios"

import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Home from "./components/Home";
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"
import NotFound from "./components/NotFound"
import InsuranceType from "./components/insurancetype/InsuranceType";
import InsuranceTypeUpdate from "./components/insurancetype/InsuranceTypeUpdate";
import InsuranceTypeSave from "./components/insurancetype/InsuranceTypeSave";
import SuccesfulRegistration from "./components/SuccesfulRegistration"
import EditProfileSuccess from "./components/EditProfileSuccess"
import EditProfile from "./components/EditProfile"
import ManageTaxType from "./components/taxtype/ManageTaxType"

Axios.defaults.baseURL = "http://localhost:8080/api"

function Main() {

    const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("usernameOfUser")))

    return (
        <BrowserRouter>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Routes>
                <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
                <Route path="/insurance_type" element={<InsuranceType />} />
                <Route path="/insurance_type/update" element={<InsuranceTypeUpdate />} />
                <Route path="/insurance_type/save" element={<InsuranceTypeSave />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/successfull/login" element={<SuccesfulRegistration/>}/>
                <Route path="/edit-profile-success" element={<EditProfileSuccess/>}/>
                <Route path="/tax_type" element={<ManageTaxType/>}/>
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)
