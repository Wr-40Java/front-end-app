import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"
import NotFound from "./components/NotFound"
import SuccesRegister from "./components/SuccesfulRegistration";
import InsuranceType from "./components/insurancetype/InsuranceType";
import InsuranceTypeUpdate from "./components/insurancetype/InsuranceTypeUpdate";
import InsuranceTypeSave from "./components/insurancetype/InsuranceTypeSave";

function Main() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeGuest />} />
          <Route path="/insurance_type" element={<InsuranceType />} />
          <Route path="/insurance_type/update" element={<InsuranceTypeUpdate />} />
          <Route path="/insurance_type/save" element={<InsuranceTypeSave />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/successfull/login" element={<SuccesRegister/>}/>  
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)
