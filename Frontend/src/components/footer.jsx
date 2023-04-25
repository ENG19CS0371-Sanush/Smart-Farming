import React, { Component } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

class Footer extends Component {
  mystyles1 = {
    marginRight: "5px",
    marginLeft: "800px",
    color: "white",
  };

  render() {
    return (
      <React.Fragment>
        <footer
          className="footer fixed-bottom bg-dark"
          style={{ height: "120px"}}

        >
          <div className="d-flex justify-content-center my-1">
            <h4 style={{color:"white"}}>Smart Farming</h4>
          </div>
          <div className="d-flex justify-content-center">
            <p style={{color:"white"}}>Copyright 2023 SmartFarm.Inc</p>
          </div>
          <div className="d-flex justify-content-center">
            <FaFacebookSquare size="2rem" />
            <FaTwitterSquare size="2rem" style={{ marginLeft: "10px" }} />
            <FaInstagramSquare size="2rem" style={{ marginLeft: "10px" }} />
            <FaYoutubeSquare size="2rem" style={{ marginLeft: "10px" }} />
          </div>


          {/* <div style={{marginTop:"20px"}}>
            
          </div> */}
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
