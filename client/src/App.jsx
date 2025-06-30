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

       

        <Route path="/updatee/:iddd" element={<Aupdate />} />
        <Route path="/mya" element={<Record />} />
        <Route path="/add" element={<Ap/>} />


        <Route path="/" element={<Homep/>} />
     
     
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
