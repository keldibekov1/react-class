import axios from "axios";
import React, { Component } from "react";
import Countryitems from "./CountryItem";

export default class Country extends Component {
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
      .get("https://6819a2451ac1155635057903.mockapi.io/api/v1/countries")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  deleteItem = (id) => {
    axios
      .delete(`https://6819a2451ac1155635057903.mockapi.io/api/v1/countries/${id}`)
      .then((res) => {
        this.setState((prevState) => ({
          data: prevState.data.filter((item) => item.id !== id),
        }));
      })
      .catch((error) => {
        console.error( error);
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      console.log(this.state.data);
    }
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) return <h2>Loading...</h2>;
    
    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!data || data.length === 0) {
      return <div>No countries available</div>;
    }

    return (
      <div>
        <h2>Countries</h2>
        <Countryitems data={data} delete={this.deleteItem} />
      </div>
    );
  }
}
