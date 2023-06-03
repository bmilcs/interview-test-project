import hamburgerImg from "../../images/hamburger.svg";
import MainLogo from "../../images/logotype.svg";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <nav>
      <img src={MainLogo} alt="Logo" />

      <ul className="nav__ul">
        <a href="#">
          <li>Why Calendio</li>
        </a>
        <a href="#">
          <li>Features</li>
        </a>
        <a href="#">
          <li>Pricing</li>
        </a>
        <a href="#">
          <li>Enterprise</li>
        </a>
        <a href="#">
          <li>Join Us</li>
        </a>
        <a href="#">
          <li>Login</li>
        </a>
      </ul>

      <button
        className="nav__button"
        onClick={() => alert("Not implemented yet")}
      >
        <img src={hamburgerImg} alt="" />
      </button>
    </nav>
  );
}

export default MainNavigation;
