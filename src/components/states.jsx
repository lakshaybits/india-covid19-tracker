import React, { Component } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import "font-awesome/css/font-awesome.min.css";

class States extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get("https://api.covidindiatracker.com/state_data.json")
      .then((res) => {
        this.setState({ persons: res.data });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <br></br>
        <table class="table table-striped">
          <thead>
            <tr>
              <th className="text-center bg-warning" scope="col">
                State/UT
              </th>
              <th className="text-center bg-primary" scope="col">
                Confirmed
              </th>
              <th className="text-center bg-success" scope="col">
                Recovered
              </th>
              <th className="text-center bg-danger" scope="col">
                Death
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map((person) => (
              <tr>
                <td className="text-center">{person.state}</td>
                <td className="text-center">
                  <NumberFormat
                    value={person.confirmed}
                    displayType={"text"}
                    thousandSeparator={true}
                    thousandsGroupStyle="lakh"
                  />
                </td>
                <td className="text-center">
                  <NumberFormat
                    value={person.active}
                    displayType={"text"}
                    thousandSeparator={true}
                    thousandsGroupStyle="lakh"
                  />
                </td>
                <td className="text-center">
                  <NumberFormat
                    value={person.deaths}
                    displayType={"text"}
                    thousandSeparator={true}
                    thousandsGroupStyle="lakh"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
        <br></br>
        <div className="container fluid text-center">
          <h1 className={"googleFont"}>Lakshay Tomar</h1>
          <h3>
            Made with <i className="fa fa-heart" style={{ color: "red" }}></i>{" "}
            in India
          </h3>
        </div>
      </div>
    );
  }
}

export default States;
