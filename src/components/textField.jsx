import PropTypes from "prop-types";
import React from "react";

const TextField = ({ label, type, value, name, error, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${error ? "is-invalid" : "is-valid"}`}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        autoComplete="off"
      />
      <p className="invalid-feedback">{error}</p>
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
};

export default TextField;
