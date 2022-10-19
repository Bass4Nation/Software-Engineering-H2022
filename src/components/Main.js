//import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Login";
import { useLocation } from "react-router-dom";

//Vet ikke om dette er den beste måten å sende data over?!
const Main = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <Nav />
      <p>
        Loggin in user: {location.state.username}, Admin: 
        {location.state.isAdmin.toString()}
      </p>
      <p>MAIN</p>
      <Footer />
    </div>
  );
};

export default Main;
