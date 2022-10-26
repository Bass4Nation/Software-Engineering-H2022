import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";
import style from "./styles/Nav.module.css";

const Nav = () => {
  // //Vet ikke om dette er den beste måten å sende data over?!
  //   //Current user
  const location = useLocation();
  // const user = location.state.username;
  // const isAdmin = location.state.isAdmin;
  // Skriv ut loginstatus i konsollen

  const [loggedIn, setLoggedIn] = useState(false); // State for å sjekke om bruker er logget inn



  React.useEffect(() => {
    if (localStorage.getItem("loggedInUser")!== null){
      setLoggedIn(true);
    }else{
      setLoggedIn(false);
    }
  }, [logOut]);

  function logOut(){
    localStorage.removeItem("loggedInUser")
  }



  return (
    <>
      <nav className={style.allNav}>
        <Link to="/" className={style.NavLink} data-testid="navMain">Alle biler til leie</Link>
        {loggedIn ? <Link to="/registrer-bil" className={style.NavLink} data-testid="navAddCar">Register bil</Link> : <></>}{/* Link til registrering av bil */}
        {loggedIn ? <Link to="/dashboard" className={style.NavLink} data-testid="navDashboard">Min side</Link> : <></>}   {/* Link til dashboard */}
        {loggedIn ? (
          <Link onClick={logOut} to="/login" className={style.NavLink} data-testid="navLogout">Logout</Link>  /* Viss brukeren er logget inn så skal den bytte på om brukeren er innlogget eller eller utlogget */
        ) : (
          <Link to="/login" className={style.NavLink} data-testid="navLogin">Login</Link>
        )}
      </nav>
    </>
  );
};

export default Nav;

//      {!loggedIn ? <button onClick={changeLogStatus}>Logg ut</button> : <></>}