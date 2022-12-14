import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login.js";
import Layout from "./components/Layout.js";
import AllCars from "./components/AllCars";
import AddCar from "./components/AddCar"; 
import Dashboard from "./components/Dashboard";  // Min side/brukerprofil/dashboard
import Payment from "./components/Payment";


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<AllCars/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrer-bil" element={<AddCar/>} />
            <Route path="/dashboard" element={<Dashboard />} />  
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;