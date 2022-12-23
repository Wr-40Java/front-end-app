import React, {useState, createContext} from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route} from "react-router-dom"
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
import EditProfileSuccess from "./components/profilepage/EditProfileSuccess"
import EditProfile from "./components/profilepage/EditProfile"
import ManageTaxType from "./components/taxtype/ManageTaxType"
import AuthProvider from "./components/context/AuthProvider"
import { ProtectedRoute } from "./components/ProtectedRoute"
import Tax from "./components/tax/Tax";

Axios.defaults.baseURL = "http://localhost:8080/api"

export const AuthContext = createContext({});


function Main() {

    const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('username')))
    const [username, setUsername] = useState(localStorage.getItem('username'))

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{loggedIn, username, setLoggedIn, setUsername}}>
                <Header />
                <Routes>
                    <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route element={<ProtectedRoute/>}>
                        <Route path="/insurance_type" element={<InsuranceType />} />
                        <Route path="/insurance_type/update" element={<InsuranceTypeUpdate />} />
                        <Route path="/insurance_type/save" element={<InsuranceTypeSave />} />
                        <Route path="/tax_type" element={<ManageTaxType />} />
                        <Route path="/tax" element={<Tax />} />
                        <Route path="/edit-profile" element={<EditProfile />} />
                        <Route path="/successfull/login" element={<SuccesfulRegistration/>}/>
                        <Route path="/edit-profile-success" element={<EditProfileSuccess/>}/>
                    </Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer />
            </AuthContext.Provider>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)
