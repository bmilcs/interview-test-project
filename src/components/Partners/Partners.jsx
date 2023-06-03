import partnerImg1 from "../../images/partner-1.svg";
import partnerImg2 from "../../images/partner-2.svg";
import partnerImg3 from "../../images/partner-3.svg";
import partnerImg4 from "../../images/partner-4.svg";
import partnerImg5 from "../../images/partner-5.svg";
import partnerImg6 from "../../images/partner-6.svg";

function Partners() {
  return (
    <section className="bg-dark">
      <div className="column-large partners">
        <img src={partnerImg1} alt="" />
        <img src={partnerImg2} alt="" />
        <img src={partnerImg3} alt="" />
        <img src={partnerImg4} alt="" />
        <img src={partnerImg5} alt="" />
        <img src={partnerImg6} alt="" />
      </div>
    </section>
  );
}

export default Partners;
