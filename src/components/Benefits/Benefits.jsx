import benefitImg1 from "../../images/benefit-1.png";
import benefitImg2 from "../../images/benefit-2.png";
import benefitImg3 from "../../images/benefit-3.png";
import "./Benefits.css";

function Benefits() {
  return (
    <section className="bg-white">
      <div className="column-small benefits">
        <div className="benefit">
          <div className="benefit__content">
            <h3>Automated appointment booking and payment processing</h3>
            <p>
              Encourage early booking with the personalized booking environment
              created by Calendio. Our appointment booking software easily
              integrates with your website, making it a stress-free online
              booking experience for your client.
            </p>
          </div>
          <div className="benefit__image-wrapper">
            <img src={benefitImg1} alt="Benefit Image 1" />
          </div>
        </div>

        <div className="benefit">
          <div className="benefit__content">
            <h3>Appointment reminders for all participants</h3>
            <p>
              No more forgotten appointments. Our scheduling software will
              automatically send email and SMS notifications so that both the
              staff and the customers receive appointment reminders and updates.
            </p>
          </div>
          <div className="benefit__image-wrapper">
            <img src={benefitImg2} alt="Benefit Image 1" />
          </div>
        </div>

        <div className="benefit">
          <div className="benefit__content">
            <h3>Monitor your business performance</h3>
            <p>
              The Calendio online booking system helps you increase sales by
              providing important business reports and dashboards to help you
              track the performance of your business through vital KPIs and
              statistics.
            </p>
          </div>
          <div className="benefit__image-wrapper">
            <img src={benefitImg3} alt="Benefit Image 1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
