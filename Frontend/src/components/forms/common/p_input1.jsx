import React from "react";

const FP_Input = (props) => {
  return (
    <div className="col-sm">
      <div>
        <label htmlFor={props.name} className="form-label">
          {props.label}
        </label>
        <select
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          name={props.name}
          className="form-control"
          id={props.name}
          error={props.error}
          style={{ width: "100px" }}
        >
        <option value="maize">maize</option>
        <option value="sugarcane">sugarcane</option>
        <option value="cotton">cotton</option>
        <option value="tobacco">tobacco</option>
        <option value="paddy">paddy</option>
        <option value="barley">barley</option>
        <option value="wheat">wheat</option>
        <option value="millets">millets</option>
        <option value="oil_seeds">oil_seeds</option>
        <option value="pulses">pulses</option>
        <option value="ground_nuts">ground_nuts</option>
        </select>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  );
};

export default FP_Input;
