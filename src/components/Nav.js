import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";

const Nav = () => {
  // //Vet ikke om dette er den beste måten å sende data over?!
  //   //Current user
  const location = useLocation();
  // const user = location.state.username;
  // const isAdmin = location.state.isAdmin;
  console.log(location); // Skriv ut loginstatus i konsollen

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
      <nav>
        <Link to="/">Alle biler til leie</Link>
        {loggedIn ? <Link to="/registrer-bil">Register bil</Link> : <></>}{/* Link til registrering av bil */}
        {loggedIn ? <Link to="/dashboard">Min side</Link> : <></>}   {/* Link til dashboard */}
        {loggedIn ? (
          <Link onClick={logOut} to="/login">Logout</Link>  /* Viss brukeren er logget inn så skal den bytte på om brukeren er innlogget eller eller utlogget */
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </>
  );
};

export default Nav;

//      {!loggedIn ? <button onClick={changeLogStatus}>Logg ut</button> : <></>}