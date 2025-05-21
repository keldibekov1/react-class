import React from "react";
import Player from "./Player";

const Players = ({ players, deletePlayer }) => (
  <div className="max-w-4xl mx-auto mt-10">
    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
      Player List
    </h2>
    <div className="grid grid-cols-3 gap-6">
      {players.map(player => player && <Player key={player.id} player={player} deletePlayer={deletePlayer} />)}
    </div>
  </div>
);

export default Players;
