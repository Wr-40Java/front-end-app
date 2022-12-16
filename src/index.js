import React from "react"
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
import SuccesRegister from "./components/SuccesfulRegistration";
import UserCarList from "./components/UserCarList";
import CarInfo from "./components/CarInfo";
import SuccesRegister from "./components/SuccesfulRegistration"
import EditProfileSuccess from "./components/EditProfileSuccess"
import EditProfile from "./components/EditProfile"

Axios.defaults.baseURL = "http://localhost:8080/api"

function Main() {
    const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("usernameOfUser")))

    return (
        <BrowserRouter>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Routes>
                <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/successfull/login" element={<SuccesRegister/>}/>
                <Route path="/edit-profile-success" element={<EditProfileSuccess/>}/>
                <Route path="/*" element={<NotFound />} />
                <Route path="/cars"   element={<UserCarList/>} />
                <Route path="/car-info/:vinNumber" element={<CarInfo/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)
