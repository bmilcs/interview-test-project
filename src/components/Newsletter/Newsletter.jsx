import Button from "../Button/Button";
import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="bg-dark">
      <div className="column-large newsletter">
        <h2>Stay in the loop with our newsletter</h2>

        <div className="input-wrapper">
          <form action="">
            <input type="text" placeholder="Enter your email address..." />
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
