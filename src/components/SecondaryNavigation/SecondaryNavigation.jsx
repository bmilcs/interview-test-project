import MainLogo from "../../images/logotype-2.svg";
import "./SecondaryNavigation.css";

function SecondaryNavigation() {
  return (
    <nav className="footer-nav">
      <img src={MainLogo} alt="Logo" />

      <ul className="footer-nav__ul">
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

      <p>All Rights Reserved ® Calendio 2023</p>
    </nav>
  );
}

export default SecondaryNavigation;
