import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { register } from "../services/userService";
import { toast } from "react-toastify";

class Register extends Form {
  state = {
    data: {
      email: "",
      password: "",
      name: "",
    },

    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(5).max(15).required().label("Password"),
    name: Joi.string().min(5).max(10).required().label("Name"),
  };

  doSubmit = async () => {
    const { data } = this.state;
    try {
      await register(data);
      window.location = "/";
      toast.success("Successfull");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <div className="container">
          <div>
            <h4 style={{ fontFamily: "italic", marginBottom: "50px" }}>
              Register Here
            </h4>
          </div>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email", "text")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name", "name")}
            {this.renderButton("Sign Up")}
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
