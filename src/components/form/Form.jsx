import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      users: JSON.parse(localStorage.getItem("users")) || [],
      updateUser: null,


      count: 0,
      intervalId: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      id: Date.now(),
      fname: this.state.fname,
      lname: this.state.lname,
    };
    this.setState({ users: [...this.state.users, newUser] });

    this.setState({
      fname: "",
      lname: "",
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      localStorage.setItem("users", JSON.stringify(this.state.users));
    }
    if (prevState.updateUser !== this.state.updateUser) {
      this.setState({
        fname: this.state.updateUser.fname,
        lname: this.state.updateUser.lname,
      });

    }
  }

startInterval = () => {
    if (!this.state.intervalId) {
      const intervalId = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
      this.setState({ intervalId });
      console.log(intervalId);
      
    }
  };

  stopInterval = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
    }
  };

  render() {
    return (
      <div className="p-6 container mx-auto">
        <form onSubmit={this.handleSubmit} action="">
          <input
            value={this.state.fname}
            onChange={(e) => this.setState({ fname: e.target.value })}
            className="border mr-4"
            type="text"
          />
          <input
            value={this.state.lname}
            onChange={(e) => this.setState({ lname: e.target.value })}
            className="border"
            type="text"
          />
          <button className="" type="submit">
            Submit
          </button>
        </form>
        <div className="container mx-auto grid grid-cols-4 gap-4 mt-4">
          {this.state.users.map((user) => (
            <div className="border p-4" key={user.id}>
              <h2 className="">{user.fname}</h2>
              <h2 className="">{user.lname}</h2>
              <button
                className="bg-red-500 text-white "
                onClick={() => {
                  this.setState({
                    users: this.state.users.filter(
                      (item) => item.id !== user.id
                    ),
                  });
                }}
              >
                Delete
              </button>
              <button onClick={() => this.setState({updateUser: user})} >Update</button>
            </div>
          ))}
        </div>



        <div className="container mx-auto mt-4">
            <h2>Timer</h2>
            <h2>{this.state.count}</h2>

            <div className="flex gap-4">
            <button onClick={this.startInterval}>Start</button>
            <button onClick={this.stopInterval}>Stop</button>
            <button onClick={() => this.setState({ count: 0 })}>Reset</button>
          </div>
        </div>
      </div>



    );
  }
}
