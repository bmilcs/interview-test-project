import Button from "../Button/Button";
import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="bg-dark" aria-label="Newsletter">
      <div className="column-large newsletter">
        <h2>Stay in the loop with our newsletter</h2>

        <div className="input-wrapper">
          <form action="">
            <input
              type="email"
              placeholder="Enter your email address..."
              aria-label="Email Address"
            />
            <Button btnColor="light">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
