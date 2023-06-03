import Button from "../Button/Button";
import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="bg-dark">
      <div className="column-large newsletter">
        <h3>Stay in the loop with our newsletter</h3>

        <div className="input-wrapper">
          <form action="">
            <input type="email" placeholder="Enter your email address..." />
            <Button btnColor="light">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
