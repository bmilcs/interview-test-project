import HeroImg from "../../images/hero.webp";
import Button from "../Button/Button";
import "./Hero.css";

function Hero() {
  return (
    <section className="bg-light">
      <div className="column-large hero">
        <div className="hero__content">
          <h1>The most intuitive online booking system</h1>
          <p>
            Calendio booking software helps you automate bookings, payments and
            reminders and manage services, employees, and locations. Set your
            schedule and availability, and watch your appointments get booked
            24/7.
          </p>

          <div className="hero__buttons">
            <Button btnColor="dark" btnSize="large">
              Start Free Trial
            </Button>
            <Button btnColor="darker" btnSize="large">
              Schedule Demo
            </Button>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={HeroImg} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
