import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav class="Navbar">
      <Link to="/">
        <div class="logo">Snaptrude</div>
      </Link>
      <ul class="nav-links menu">
        <Link to="/">
          <li>
            <span>Home</span>
          </li>
        </Link>
        <li>
          <span>About</span>
        </li>
        <li>
          <span>Services</span>
        </li>
        <li>
          <span>Pricing</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
