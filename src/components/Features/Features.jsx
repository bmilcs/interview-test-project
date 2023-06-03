import featureImg1 from "../../images/feature-1.png";
import featureImg2 from "../../images/feature-2.png";
import featureImg3 from "../../images/feature-3.png";
import "./Features.css";

function Features() {
  return (
    <section className="bg-light">
      <div className="column-small features">
        <div className="features__img-wrapper">
          <img src={featureImg1} alt="" />
          <img src={featureImg2} alt="" />
          <img src={featureImg3} alt="" />
        </div>
        <div className="features__content">
          <div className="features__status-bar"></div>
          <div className="features__text-wrapper">
            <div className="features__feature">
              <h4>Learn About Your Business Occupancy and Earned Revenue</h4>
              <p>
                Keeping a detailed record of your business performance helps you
                have a clear insight into where your business is heading and
                what you can do to increase sales.
              </p>
              <a href="#">Learn More</a>
            </div>
            <div className="features__feature">
              <h4>Discover Your Returning Customer Rate</h4>
              <p>
                Calendio dashboard reveals you the number of new customers and
                the percentage of your returning customers, so you can always
                know your retention rate.
              </p>
              <a href="#">Learn More</a>
            </div>
            <div className="features__feature">
              <h4>Easily Identify Your Most Demanded Employees and Services</h4>
              <p>
                Under the performance section in the Calendio dashboard, you can
                see how many bookings each employee had and how much revenue
                they generated over the period you set.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
