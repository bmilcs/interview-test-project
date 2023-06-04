import Hamburger from "../../images/hamburger";
import Logotype from "../../images/logotype";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <nav className="main-nav" aria-label="Main Navigation">
      <Logotype />

      <ul className="main-nav__ul">
        <li>
          <a href="#">Why Calendio</a>
        </li>

        <li>
          <a href="#">Features</a>
        </li>

        <li>
          <a href="#">Pricing</a>
        </li>

        <li>
          <a href="#">Enterprise</a>
        </li>

        <li>
          <a href="#">Join Us</a>
        </li>

        <li>
          <a href="#">Login</a>
        </li>
      </ul>

      <button
        className="main-nav__button"
        onClick={() => alert("Not implemented yet")}
        aria-label="Expand Navigation"
      >
        <Hamburger />
      </button>
    </nav>
  );
}

export default MainNavigation;
