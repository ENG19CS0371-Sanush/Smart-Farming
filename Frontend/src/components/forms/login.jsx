import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import Form from "./common/form";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(5).max(15).required().label("Password"),
  };

  doSubmit = () => {
    // callling the server
    console.log(this.state.data);
  };

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm">
                {this.renderInput("email", "Email", "text")}
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                {this.renderInput("password", "Password", "password")}
              </div>
            </div>
            <div className="row">
              <div className="col-sm"> {this.renderButton("Login")}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
