import HeroImg from "../../images/hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>The most intuitive online booking system</h2>
        <p>
          Calendio booking software helps you automate bookings, payments and
          reminders and manage services, employees, and locations. Set your
          schedule and availability, and watch your appointments get booked
          24/7.
        </p>
      </div>
      <div className="hero-image-container">
        <img src={HeroImg} alt="Hero Image" />
      </div>
    </section>
  );
}

export default Hero;
