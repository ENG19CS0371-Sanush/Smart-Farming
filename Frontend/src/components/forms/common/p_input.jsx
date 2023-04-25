import React from "react";

const P_Input = (props) => {
  return (
    <div className="col-sm">
      <div>
        <label htmlFor={props.name} className="form-label">
          {props.label}
        </label>
        <input
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          name={props.name}
          className="form-control"
          id={props.name}
          error={props.error}
          style={{ width: "100px" }}
        />
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  );
};

export default P_Input;
