import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
