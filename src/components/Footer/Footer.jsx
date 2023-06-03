import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="column-large footer">
        <SecondaryNavigation />
      </div>
    </footer>
  );
}

export default Footer;
