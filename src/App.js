import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.js";
import Main from "./components/Main.js";


function App() {
  return (

  <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Main" element={<Main />} />
      </Routes>
  </Router>
  );
}

export default App;