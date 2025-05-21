import axios from "axios";
import React, { Component } from "react";
import Fooditems from "./Fooditems";
// rafce
// rcc

export default class Food extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }
  componentDidMount() {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        this.setState({ error: err });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  componentDidUpdate() {
    console.log(this.state.data?.recipes);
  }
  render() {
    return this.state.error ? (
      <div>something error</div>
    ) : (
      <div>
        <h2>Food</h2>
       <Fooditems data={this.state.data?.recipes} />
        {this.state.loading && <h2>Loading...</h2>}
      </div>
    );
  }
}
