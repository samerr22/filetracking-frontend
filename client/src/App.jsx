import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Record from "./pages/table";
import Ap from "./pages/appoiment";

import Aupdate from "./pages/Aupdate";


import Homep from "./pages/homep";





export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

       

       <Route path="/" element={<Homescreen />} />
        <Route path="/compnayregister" element={<SignUp />} />
        <Route path="/LearderRe" element={<LearderRe />} />
        <Route path="/Leardersign-in" element={<Signin />} />
        <Route path="/employeesi" element={<SignInEmployee />} />
        <Route path="/sale" element={<Sale />} />

        {/* Protected Leader Routes */}
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/dashboard" element={<Sidebar />}>
            <Route path="Addemployee" element={<Addemployee />} />
            <Route path="admindashboard/:userId" element={<Admindashboard />} />
            <Route path="companyemp" element={<CompanyEmp />} />
            <Route path="Employee/:empId" element={<Employeeupdate />} />
          </Route>
        </Route>
     
     
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
