import MainLogo from "../../images/logotype.svg";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <nav>
      <img src={MainLogo} alt="Logo" />

      <ul>
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
    </nav>
  );
}

export default MainNavigation;
