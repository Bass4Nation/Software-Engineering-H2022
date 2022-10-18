import { Link } from "react-router-dom";

const Nav = () => {

    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/Main">Main</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;