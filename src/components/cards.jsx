import React, { Component } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import coronaImage from "../images/image.png";
import indiaFlag from "../images/indiaFlag.png";

class Cards extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get("https://api.covidindiatracker.com/total.json").then((res) => {
      this.setState({ persons: res.data });
    });
  }

  render() {
    let persons = this.state.persons;
    return (
      <div>
        {" "}
        <br></br>
        <div className="text-center">
          <img src={coronaImage} alt="COVID-19" /> <br></br> <br></br>
          <img src={indiaFlag} style={{ width: "30%" }} alt="INDIA" />
        </div>
        <br></br> <br></br>
        <div className="container-fluid px-5">
          <div className="card-deck">
            <div className="card bg-primary px-10">
              <div className="card-body text-center">
                <p className="card-text font-weight-bold h3">
                  Confirmed <br></br>{" "}
                </p>
                <p className="card-text h3">
                  <NumberFormat
                    value={persons.confirmed}
                    displayType={"text"}
                    thousandSeparator={true}
                    thousandsGroupStyle="lakh"
                  />
                </p>
              </div>
            </div>
            <div className="card bg-success">
              <div className="card-body text-center">
                <p className="card-text font-weight-bold h3">
                  Recovered <br></br>{" "}
                </p>
                <p className="card-text h3">
                  <NumberFormat
                    value={persons.recovered}
                    displayType={"text"}
                    thousandSeparator={true}
                    thousandsGroupStyle="lakh"
                  />
                </p>
              </div>
            </div>
            <div className="card bg-danger">
              <div className="card-body text-center">
                <p className="card-text font-weight-bold h3">
                  Deaths <br></br>{" "}
                </p>
                <p className="card-text h3">
                  <NumberFormat
                    value={persons.deaths}
                    displayType={"text"}
                    thousandSeparator={true}
                    thousandsGroupStyle="lakh"
                  />
                </p>
              </div>
            </div>
            <div className="card bg-warning">
              <div className="card-body text-center">
                <p className="card-text font-weight-bold h3">
                  Active <br></br>{" "}
                </p>
                <p className="card-text h3">
                  <NumberFormat
                    value={persons.active}
                    displayType={"text"}
                    thousandSeparator={true}
                    thousandsGroupStyle="lakh"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
