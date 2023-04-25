import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Login from "./forms/login";

class Navbar extends Component {
  styles = {
    // fontWeight: "bold",
    // fontStyle: "italic",
    color: "white",
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <span className="navbar-brand">
            <i style={this.styles}>
              <h5>
                <b>Smart Farm</b>
              </h5>
            </i>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  <span style={this.styles}>Home</span> <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/schemes">
                  <span style={this.styles}>Schemes</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/loans">
                  <span style={this.styles}>Loans</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/types">
                  <span style={this.styles}>Types</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/predict">
                  <span style={this.styles}>Crop_Pred</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fpredict">
                  <span style={this.styles}>Ferti_Pred</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/disease-predict">
                  <span style={this.styles}>Disease_Pred</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  <span style={this.styles}>Register</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
