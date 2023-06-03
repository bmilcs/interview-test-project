import { useState } from "react";
import featureImg1 from "../../images/feature-1.png";
import featureImg2 from "../../images/feature-2.png";
import featureImg3 from "../../images/feature-3.png";
import "./Features.css";

function Features() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="bg-light">
      <div className="column-small features">
        <div className="features__img-wrapper">
          <img
            src={featureImg1}
            alt="Business Occupancy and Earned Revenue"
            className={activeSlide === 0 ? "active-image" : ""}
          />
          <img
            src={featureImg2}
            alt="Returning Customer Rate"
            className={activeSlide === 1 ? "active-image" : ""}
          />
          <img
            src={featureImg3}
            alt="Most Demanded Employees and Services"
            className={activeSlide === 2 ? "active-image" : ""}
          />
        </div>

        <div className="features__content">
          <div className="features__status-bar"></div>
          <div className="features__text-wrapper">
            <div
              className="features__feature"
              onClick={() => setActiveSlide(0)}
            >
              <h4>Learn About Your Business Occupancy and Earned Revenue</h4>
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
              <h4>Discover Your Returning Customer Rate</h4>
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
              <h4>Easily Identify Your Most Demanded Employees and Services</h4>
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
