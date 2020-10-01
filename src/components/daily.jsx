import React, { Component } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";

class Daily extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get("https://api.covid19api.com/summary").then((res) => {
      this.setState({ persons: res.data.Countries[76] });
    });
  }

  render() {
    let persons = this.state.persons;
    return (
      <div>
        {" "}
        <br></br>
        <h1 className="text-center">Last 24 Hours</h1>
        <h4 className="text-center">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Confirmed</th>
                <th scope="col">Recovered</th>
                <th scope="col">Deaths</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-primary">
                  <NumberFormat
                    value={persons.NewConfirmed}
                    displayType={"text"}
                    thousandSeparator={true}
                    thousandsGroupStyle="lakh"
                  />
                </td>
                <td className="text-success">
                  <NumberFormat
                    value={persons.NewRecovered}
                    displayType={"text"}
                    thousandSeparator={true}
                    thousandsGroupStyle="lakh"
                  />
                </td>
                <td className="text-danger">
                  <NumberFormat
                    value={persons.NewDeaths}
                    displayType={"text"}
                    thousandSeparator={true}
                    thousandsGroupStyle="lakh"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </h4>
      </div>
    );
  }
}

export default Daily;
