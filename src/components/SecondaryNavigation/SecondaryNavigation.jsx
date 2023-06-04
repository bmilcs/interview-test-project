import Logotype2 from "../../images/logotype-2";
import "./SecondaryNavigation.css";

function SecondaryNavigation() {
  return (
    <nav className="footer-nav" aria-label="Secondary Navigation">
      <Logotype2 />

      <ul className="footer-nav__ul">
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

      <p>All Rights Reserved ® Calendio 2023</p>
    </nav>
  );
}

export default SecondaryNavigation;
