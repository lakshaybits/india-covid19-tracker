import React, { Component } from "react";
import axios from "axios";

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
        <h1>Covid-19 Tracker</h1>
        <div className="container-fluid">
          <div class="card-deck">
            <div class="card bg-primary px-10">
              <div class="card-body text-center">
                <p class="card-text font-weight-bold h3">Infected</p>
              </div>
            </div>
            <div class="card bg-success">
              <div class="card-body text-center">
                <p class="card-text font-weight-bold h3">Recovered</p>
              </div>
            </div>
            <div class="card bg-danger">
              <div class="card-body text-center">
                <p class="card-text font-weight-bold h3">Deaths</p>
              </div>
            </div>
            <div class="card bg-warning">
              <div class="card-body text-center">
                <p class="card-text font-weight-bold h3">Active</p>
              </div>
            </div>
          </div>
        </div>
        <h1>
          {persons.active} <br></br>
          {persons.confirmed}
        </h1>
      </div>
    );
  }
}

export default Cards;
