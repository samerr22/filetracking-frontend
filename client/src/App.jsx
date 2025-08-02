import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Signin from "./pages/LearderSignin";
import SignUp from "./pages/Company";
import LearderRe from "./pages/LearderRegis";
import Addemployee from "./pages/Addemployee";

import SignInEmployee from "./pages/Employeesingin";
import Homescreen from "./pages/Homepage";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";

import Admindashboard from "./pages/admindashboard";
import Sidebar from "./pages/adminsidebar";
import CompanyEmp from "./pages/companyemployee";
import Employeeupdate from "./pages/Employeeupdate";
import Sale from "./pages/sale";
import MainHome from "./pages/mainhome";

import ProjectM from "./pages/ProjectM";
import Pricing from "./pages/Pricing";

import UserPack from "./Package/userPack";
import AddPack from "./Package/AddPack";

import GLBViewer from "./pages/GLBViewer";

import Sub from "./pages/submit";

import HelmetLandingPage from "./pages/HelmetLandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

  <Route path="/scen" element={<GLBViewer />} />
   <Route path="/s" element={<Sub/>} />


    <Route path="/HelmetLandingPage" element={< HelmetLandingPage/>} />

        
        <Route path="/compnayregister" element={<SignUp />} />
        <Route path="/LearderRe" element={<LearderRe />} />
        <Route path="/Leardersign-in" element={<Signin />} />
        <Route path="/employeesi" element={<SignInEmployee />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/mainhome" element={<MainHome />} />
        <Route path="/projectm" element={<ProjectM />} />
        <Route path="/Pricing" element={<Pricing />} />

        <Route path="/Template" element={<UserPack />} />
        <Route path="/AddPack" element={<AddPack />} />

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
