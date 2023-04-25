import React, { Component } from "react";
import { schemes } from "./services/recordService";
import {Spinner} from "./loader";

class Schemes extends Component {
  state = {
    data: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({loading: true});
    try {
      const { data } = await schemes();
      this.setState({ data });
      this.setState({loading: false});
    } catch (ex) {
      console.log("Error", ex.message);
    }
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <div>
          <h4 style={{ fontFamily: "italic" }}>Latest Government Schemes</h4>
        </div>
        <div className="my-3">
          <table className="table table-hover">
            
            <thead>
              <tr>
                <th>#</th>
                <th>Scheme Name</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.loading ? (<div><Spinner/></div>) : 
                (this.state.data.map((m) => (
                  <tr key={m._id}>
                    <th scope="row">{this.state.data.indexOf(m) + 1}</th>
                    <td>
                      <a href={m.link} target="_blank">
                        {m.name}
                      </a>
                    </td>
                  </tr>
                )))}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Schemes;
