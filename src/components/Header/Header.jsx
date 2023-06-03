import Button from "../Button/Button";
import MainNavigation from "../MainNavigation/MainNavigation";
import "./Header.css";

function Header() {
  return (
    <header className="bg-light">
      <div className="column-large header">
        <MainNavigation />

        <div className="header__button-wrapper">
          <Button btnColor="dark" btnSize="small">
            Start Free Trial
          </Button>
          <Button btnColor="darker" btnSize="small">
            Schedule Demo
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
