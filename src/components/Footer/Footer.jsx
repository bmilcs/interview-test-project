import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="column-large footer">
        <SecondaryNavigation />

        <p>All Rights Reserved ® Calendio 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
