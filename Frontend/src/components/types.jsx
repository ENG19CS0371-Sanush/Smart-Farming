import React, { Component } from "react";
import { types } from "./services/recordService";
import {Spinner} from "./loader";

class Category extends Component {
  state = {
    data: [],
    loading:false
  };

  async componentDidMount() {
    this.setState({loading:true});
    try {
      const { data } = await types();
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
          <h4 style={{ fontFamily: "italic" }}>Loans For Different Fields</h4>
        </div>
        <div className="my-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Category Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.loading ? (<div><Spinner/></div>): (
                this.state.data.map((m) => (
                  <tr key={m._id}>
                    <th>{this.state.data.indexOf(m) + 1}</th>
                    <td>{m.name}</td>
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

export default Category;
