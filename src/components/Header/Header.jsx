import { useEffect, useRef } from "react";
import useElementOffScreen from "../../hooks/useElementOffScreen";
import Button from "../Button/Button";
import MainNavigation from "../MainNavigation/MainNavigation";
import "./Header.css";

function Header() {
  const headerRef = useRef(null);
  const isHeaderOffScreen = useElementOffScreen(headerRef);

  useEffect(() => {
    if (isHeaderOffScreen) {
      console.log("off screen!");
    }
  }, [isHeaderOffScreen]);

  return (
    <header className={`bg-light`} ref={headerRef}>
      <div className={`${isHeaderOffScreen ? "visible" : "invisible"}`}>
        <div className={`column-large header`}>
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
      </div>
    </header>
  );
}

export default Header;
