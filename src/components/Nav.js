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
  console.log(location); // Skriv ut loginstatus i konsollen

  const [loggedIn, setLoggedIn] = useState(false); // State for å sjekke om bruker er logget inn

  React.useEffect(() => {
    if (localStorage.getItem("loggedInUser") !== null) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [logOut]);

  function logOut() {
    localStorage.removeItem("loggedInUser");
  }

  return (
    <>
      <nav className={style.allNav}>
        <Link to="/" className="NavElement" data-testid="navMain">
          Hjem
        </Link>
        {/* Link til forsiden */}
        {/* Link til alle biler som er til leie i systemet */}
        <Link to="/alle-biler">Alle biler til leie</Link>
        {/* Link til registrering av bil */}
        <Link to="/registrer-bil">Registrer bil</Link>
        {/* Link til dashboard */}
        {loggedIn ? (
          <Link to="/dashboard" data-testid="navDashboard">
            Min side
          </Link>
        ) : (
          <></>
        )}
        {/* Viss brukeren er logget inn så skal den bytte på om brukeren er innlogget eller eller utlogget */}
        {loggedIn ? (
          // <Link to="/Dashboard">Min profil</Link>
          <Link onClick={logOut} to="/login" data-testid="navLogout">
            Logout
          </Link>
        ) : (
          <Link to="/login" data-testid="navLogin">
            Login
          </Link>
        )}
      </nav>
    </>
  );
};

export default Nav;

//      {!loggedIn ? <button onClick={changeLogStatus}>Logg ut</button> : <></>}
