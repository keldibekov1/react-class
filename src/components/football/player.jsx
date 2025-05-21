import React from 'react';

const Player = ({ player, deletePlayer }) => {
  const { name, surname, age, country, club, playerNumber, image } = player;

  return (
    <div className="border p-4 rounded-md shadow-sm mb-4 bg-gray-50 flex gap-4 items-center">
      {image && (
        <img
          src={image}
          className="w-24 h-24 object-cover rounded-full border"
        />
      )}
      <div>
        <h3 className="text-lg font-bold">{name} {surname}</h3>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Country:</strong> {country}</p>
        <p><strong>Club:</strong> {club}</p>
        <p><strong>Player Number:</strong> {playerNumber}</p>
        <button
          onClick={() => deletePlayer(player.id)}
          className="mt-2 text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Player;
