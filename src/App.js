// import { Route, HashRouter as Router, Routes } from "react-router-dom";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login.js";
import Main from "./components/Main.js";
import Layout from "./components/Layout.js";
import Utleie from "./components/Utleie";
import AlleBiler from "./components/AlleBiler";
import RegistrerBil from "./components/RegistrerBil";


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/utleie" element={<Utleie />} />
            <Route path="/alle-biler" element={<AlleBiler />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrer-bil" element={<RegistrerBil />} />
            {/* <Route path="/dashboard" element={<Dashboard />} />  For å se brukerens profil  */}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;