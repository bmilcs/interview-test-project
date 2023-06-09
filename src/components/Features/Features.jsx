import { useState } from "react";
import featureImg1 from "../../images/feature-1.webp";
import featureImg2 from "../../images/feature-2.webp";
import featureImg3 from "../../images/feature-3.webp";
import "./Features.css";

function Features() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="bg-light" aria-label="Features">
      <div className="column-small features">
        <div className="features__img-wrapper">
          <img
            src={featureImg1}
            alt="Business Occupancy and Earned Revenue"
            className={activeSlide === 0 ? "active-image" : ""}
            loading="lazy"
          />
          <img
            src={featureImg2}
            alt="Returning Customer Rate"
            className={activeSlide === 1 ? "active-image" : ""}
            loading="lazy"
          />
          <img
            src={featureImg3}
            alt="Most Demanded Employees and Services"
            className={activeSlide === 2 ? "active-image" : ""}
            loading="lazy"
          />
        </div>

        <div className="features__content">
          <div className="features__status-bar"></div>
          <div className="features__text-wrapper">
            <div
              className="features__feature"
              onClick={() => setActiveSlide(0)}
            >
              <h3>Learn About Your Business Occupancy and Earned Revenue</h3>
              {activeSlide === 0 ? (
                <>
                  <p>
                    Keeping a detailed record of your business performance helps
                    you have a clear insight into where your business is heading
                    and what you can do to increase sales.
                  </p>
                  <a href="#">Learn More</a>
                </>
              ) : (
                ""
              )}
            </div>

            <div
              className="features__feature"
              onClick={() => setActiveSlide(1)}
            >
              <h3>Discover Your Returning Customer Rate</h3>
              {activeSlide === 1 ? (
                <>
                  <p>
                    Calendio dashboard reveals you the number of new customers
                    and the percentage of your returning customers, so you can
                    always know your retention rate.
                  </p>
                  <a href="#">Learn More</a>
                </>
              ) : (
                ""
              )}
            </div>

            <div
              className="features__feature"
              onClick={() => setActiveSlide(2)}
            >
              <h3>Easily Identify Your Most Demanded Employees and Services</h3>
              {activeSlide === 2 ? (
                <>
                  <p>
                    Under the performance section in the Calendio dashboard, you
                    can see how many bookings each employee had and how much
                    revenue they generated over the period you set.
                  </p>
                  <a href="#">Learn More</a>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
