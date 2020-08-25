import React from "react";
import ReactTooltip from "react-tooltip";

import "../../stylesheets/common.css";

const Input = ({
  htmlFor,
  label,
  icon,
  type,
  id,
  name,
  placeholder,
  autofocus,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label className="label" htmlFor={htmlFor}>
        {label}
      </label>
      <div className="input-group">
        <div className="input-group-prepend">
          <div
            className={
              "input-group-text prepend" + (error ? " invalid-prepapp" : "")
            }
          >
            <i className={icon + " fa-sm icon"} aria-hidden="true" />
          </div>
        </div>
        <input
          type={type}
          className={"form-control" + (error ? " is-invalid" : "")} // is-invalid
          id={id}
          name={name}
          placeholder={placeholder}
          autoFocus={autofocus}
          required={true}
          onChange={onChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

const Password = ({
  htmlFor,
  label,
  prependicon,
  type,
  id,
  name,
  placeholder,
  appendicon,
  onClick,
  register,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label className="label" htmlFor={htmlFor}>
        {label}
        {register && (
          <i
            className="fa-question-circle"
            aria-hidden="true"
            data-for="question-circle"
            data-tip
          />
        )}
        {register && (
          <ReactTooltip id="question-circle">
            <p>Passwords must be at least 8 characters.</p>
          </ReactTooltip>
        )}
      </label>
      <div className="input-group">
        <div className="input-group-prepend">
          <div
            className={
              "input-group-text prepend" + (error ? " invalid-prepapp" : "")
            }
          >
            <i className={prependicon + " fa-sm icon"} aria-hidden="true" />
          </div>
        </div>
        <input
          type={type}
          className={"form-control" + (error ? " is-invalid" : "")} // is-invalid
          id={id}
          name={name}
          placeholder={placeholder}
          required={true}
          onChange={onChange}
        />
        <div className="input-group-append">
          <div
            className={
              "input-group-text append" + (error ? " invalid-prepapp" : "")
            }
          >
            <i
              className={appendicon + " eye linked-icons"}
              toggle="#password"
              onClick={onClick}
            />
          </div>
        </div>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

const CheckBox = ({ mChecked, sChecked }) => {
  return (
    <div className="myTest custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customCheck1"
        checked={mChecked}
      />
      <label
        className="custom-control-label"
        htmlFor="customCheck1"
        style={{ color: mChecked ? "#f5c01f" : "#ffffff", marginRight: "2em" }}
      >
        Movies
      </label>
      <input
        type="checkbox"
        className="custom-control-input"
        id="customCheck2"
        checked={sChecked}
      />
      <label
        className="custom-control-label"
        htmlFor="customCheck2"
        style={{ color: sChecked ? "#f5c01f" : "#ffffff" }}
      >
        Shows
      </label>
    </div>
  );
};

export { Input, Password, CheckBox };
