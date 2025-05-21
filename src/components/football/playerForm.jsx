import React, { Component } from "react";
import Players from "./players";

export default class PlayerForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      age: "",
      country: "",
      club: "",
      playerNumber: "",
      image: null,
      players: JSON.parse(localStorage.getItem("players")) || [],
    };
  }

  handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ image: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      this.setState({ image: null });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name: this.state.name,
      surname: this.state.surname,
      age: this.state.age,
      country: this.state.country,
      club: this.state.club,
      playerNumber: this.state.playerNumber,
      image: this.state.image,
    };

    const updatedPlayers = [...this.state.players, newUser];

    this.setState({
      players: updatedPlayers,
      name: "",
      surname: "",
      age: "",
      country: "",
      club: "",
      playerNumber: "",
      image: null,
    });

    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };

  deletePlayer = (playerId) => {
    const updatedPlayers = this.state.players.filter(
      (player) => player.id !== playerId
    );
    this.setState({ players: updatedPlayers });
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };

  editPlayer

  render() {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Add New Player
        </h2>
        <form onSubmit={this.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2  gap-6">
            <div>
              <label className=" mb-1 text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                required
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className=" mb-1 text-sm font-medium text-gray-600">
                Surname
              </label>
              <input
                required
                value={this.state.surname}
                onChange={(e) => this.setState({ surname: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter surname"
              />
            </div>

            <div>
              <label className=" mb-1 text-sm font-medium text-gray-600">
                Age
              </label>
              <input
                required
                value={this.state.age}
                onChange={(e) => this.setState({ age: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                placeholder="Enter age"
              />
            </div>

            <div>
              <label className=" mb-1 text-sm font-medium text-gray-600">
                Country
              </label>
              <input
                required
                value={this.state.country}
                onChange={(e) => this.setState({ country: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter country"
              />
            </div>

            <div>
              <label className=" mb-1 text-sm font-medium text-gray-600">
                Club
              </label>
              <input
                required
                value={this.state.club}
                onChange={(e) => this.setState({ club: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Enter club"
              />
            </div>

            <div>
              <label className=" mb-1 text-sm font-medium text-gray-600">
                Player Number
              </label>
              <input
                required
                value={this.state.playerNumber}
                onChange={(e) =>
                  this.setState({ playerNumber: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                placeholder="Enter player number"
              />
            </div>
          </div>

          <div>
            <label className=" mb-1 text-sm font-medium text-gray-600">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={this.handleFileChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
            {this.state.image && (
              <img
                src={this.state.image}
                className="mt-4 w-32 h-32 object-cover border rounded-lg"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-slate-700 text-white py-3 px-4 rounded-lg hover:bg-slate-900 transition"
          >
            Submit
          </button>
        </form>

        <Players players={this.state.players} deletePlayer={this.deletePlayer} />
      </div>
    );
  }
}
