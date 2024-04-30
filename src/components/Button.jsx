import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to={props.href}>
      <button
        className={`border rounded-2xl px-5 py-1 cursor-pointer ${
          props.type === "emerald" &&
          "  border-none shadow-2xl bg-emerald-600 hover:bg-emerald-700 text-neutral-50 transition"
        } ${
          props.type === "neutral-white" &&
          "border-none shadow-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition"
        }`}
      >
        {props.content}
      </button>
    </Link>
  );
}

export default Button;

Button.propTypes = {
  content: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  content: "Button Text",
  href: "/",
  type: "neutral-white",
};
