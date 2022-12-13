import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Axios from "axios";

import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"
import NotFound from "./components/NotFound"
import SuccesRegister from "./components/SuccesfulRegistration";
import InsuranceCompany from "./components/InsuranceCompany"

function Main() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeGuest />} />
          <Route path="/insurance_company" element={<InsuranceCompany />}/>
          <Route path="/about-us" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/successfull/login" element={<SuccesRegister/>}/>  
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

Axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)
