import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Nav = () => {
  // const loginState = localStorage.getItem("isAdmin"); // Få loginstatus fra lokal lagring

// //Vet ikke om dette er den beste måten å sende data over?!
//   //Current user
  const location = useLocation();
  // const user = location.state.username;
  // const isAdmin = location.state.isAdmin;



  console.log(location); // Skriv ut loginstatus i konsollen

  return (
    <>
      <nav>
        <Link to="/">Hjem</Link>  {/* Link til forsiden */}
        <Link to="/alle-biler">Alle biler til leie</Link> {/* Link til alle biler som er til leie i systemet */}
        <Link to="/utleie">Utleie av bil</Link>  {/* Link til utleie */}
        {/* Viss brukeren er logget inn så skal den bytte på om brukeren er innlogget eller eller utlogget */}
        {false === true ? (
          // <Link to="/Dashboard">Min profil</Link>
          <Link to="/">Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}

      </nav>
    </>
  );
};

export default Nav;
