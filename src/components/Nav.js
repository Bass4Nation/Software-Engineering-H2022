import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
