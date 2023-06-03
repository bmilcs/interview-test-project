import Button from "../Button/Button";
import MainNavigation from "../MainNavigation/MainNavigation";
import "./Header.css";

function Header() {
  return (
    <header>
      <MainNavigation />

      <div className="header-button-wrapper">
        <Button>Start Free Trial</Button>
        <Button>Schedule Demo</Button>
      </div>
    </header>
  );
}

export default Header;
