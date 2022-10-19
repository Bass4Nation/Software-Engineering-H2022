//import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import "./Login";
import { useLocation } from "react-router-dom";

//Vet ikke om dette er den beste måten å sende data over?!
const Main = () => {
    const location = useLocation();
    console.log(location.state)
  return (
    <div>
      <Nav />
      <p>Hei på deg {location.state.username}!</p>
      <p>MAIN</p>
      <Footer />
    </div>
  );
};

export default Main;
