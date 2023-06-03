import PropTypes from "prop-types";
import "./Button.css";

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  btnColor: PropTypes.string,
  btnSize: PropTypes.string,
};

function Button({ children, onClick, btnColor = "darker", btnSize = "large" }) {
  const bgColor = btnColor === "darker" ? "btn-darker" : "btn-dark";
  const size = btnSize === "large" ? "btn-large" : "btn-small";

  return (
    <button onClick={onClick} className={`${bgColor} ${size}`}>
      {children}
    </button>
  );
}

export default Button;
