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
              <th className="text-center bg-secondary" scope="col">
                State/UT
              </th>
              <th className="text-center bg-primary" scope="col">
                Confirmed
              </th>
              <th className="text-center bg-success" scope="col">
                Recovered
              </th>
              <th className="text-center bg-danger" scope="col">
                Deaths
              </th>
              <th className="text-center bg-warning" scope="col">
                Active
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
                    value={person.recovered}
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
                <td className="text-center">
                  <NumberFormat
                    value={person.active}
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
          <h5 className="text-muted">You can find me everywhere</h5>
          <a
            href="https://www.facebook.com/lakshaytomar13"
            style={{ color: "#3b5998", fontSize: "3em", marginLeft: "17px" }}
            target="_blank"
          >
            <i class="fa fa-facebook-official"></i>
          </a>
          <a
            href="https://www.instagram.com/lakshay__tomar"
            style={{ color: "#517fa4", fontSize: "3em", marginLeft: "17px" }}
            target="_blank"
          >
            <i class="fa fa-instagram insta"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lakshaytomar"
            style={{ color: "#007bb6", fontSize: "3em", marginLeft: "17px" }}
            target="_blank"
          >
            <i class="fa fa-linkedin-square"></i>
          </a>
          <a
            href="mailto:lakshaytomar.bits@gmail.com"
            style={{ color: "#d14836", fontSize: "3em", marginLeft: "17px" }}
            target="_blank"
          >
            <i class="fa fa-envelope-o"></i>
          </a>
          <h5 className="text-muted">
            Made with <i className="fa fa-heart" style={{ color: "red" }}></i>{" "}
            in India
          </h5>
        </div>
      </div>
    );
  }
}

export default States;
