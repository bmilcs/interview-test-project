import Partner1 from "../../images/partner-1";
import Partner2 from "../../images/partner-2";
import Partner3 from "../../images/partner-3";
import Partner4 from "../../images/partner-4";
import Partner5 from "../../images/partner-5";
import Partner6 from "../../images/partner-6";
import "./Partners.css";

function Partners() {
  return (
    <section className="bg-dark" aria-label="Partners">
      <div className="column-large partners">
        <Partner1 />
        <Partner2 />
        <Partner3 />
        <Partner4 />
        <Partner5 />
        <Partner6 />
      </div>
    </section>
  );
}

export default Partners;
