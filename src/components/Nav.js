import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  // //Vet ikke om dette er den beste måten å sende data over?!
  //   //Current user
  const location = useLocation();
  // const user = location.state.username;
  // const isAdmin = location.state.isAdmin;
  console.log(location); // Skriv ut loginstatus i konsollen

  const [loggedIn, setLoggedIn] = useState(false); // State for å sjekke om bruker er logget inn


  // For å teste om bruker er logget inn/ Vise elementer basert på om bruker er logget inn eller ikke
  const changeLogStatus = () => {
    // Logg ut bruker
    if(loggedIn === true) {
      setLoggedIn(false);
    }else{
      // Logg inn bruker
      setLoggedIn(true);
    }
  };

  return (
    <>
      <nav>
        <Link to="/">Hjem</Link> {/* Link til forsiden */}
        {/* Link til alle biler som er til leie i systemet */}
        <Link to="/alle-biler">Alle biler til leie</Link>
        <Link to="/utleie">Utleie av bil</Link> {/* Link til utleie */}
        {/* Link til registrering av bil */}
        <Link to="/registrer-bil">Registrer bil</Link>{" "}
        {/* Link til dashboard */}
        {loggedIn ? <Link to="/dashboard">Min side</Link> : <></>}
        {/* Viss brukeren er logget inn så skal den bytte på om brukeren er innlogget eller eller utlogget */}
        {loggedIn ? (
          // <Link to="/Dashboard">Min profil</Link>
          <Link to="/">Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <button onClick={changeLogStatus}>Logg inn</button> {/* Knapp for å logge inn/ut. Endrer bare loggedIn State for nå*/}
    </>
  );
};

export default Nav;
