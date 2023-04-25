import React, { Component } from "react";
import {Spinner} from "./loader";
import { farmers } from "./services/recordService";

class Farmer extends Component {
  state = {
    data: [],
    loading:false
  };

  async componentDidMount() {
    this.setState({loading:true});
    try {
      const { data } = await farmers();
      this.setState({ data });
      this.setState({loading:false});
    } catch (ex) {
      console.log(ex);
    }
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <div>
          <h4 style={{ fontFamily: "italic" }}>List of Successful Farmers</h4>
        </div>
        <div className="my-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col-sm">Name</th>
                <th scope="col-sm">Crop</th>
                <th scope="col-sm">Place</th>
                <th scope="col-sm">Contact</th>
              </tr>
            </thead>
            <tbody>
              {this.state.loading?(<div><Spinner/></div>):(
                     this.state.data.map((m) => (
                      <tr key={m._id}>
                        <td scope="row">{m.name}</td>
                        <td>{m.crop}</td>
                        <td>{m.place}</td>
                        <td>{m.contact}</td>
                      </tr>
                    ))
              )}  
           
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Farmer;
