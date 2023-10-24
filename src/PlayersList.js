//PlayersList.js : the Player component and the players’ data from players.js
import React from 'react';
import Player from "./Player";
import players from "./players";
// Display all players inside the PlayerList.js, by mapping through all the elements in the array of players
const PlayersList = () => {
  return (
    <>
      {players.map(
        (el, index) => (
      <Player key={index} {...el} />
      )
      )
      }
    </>
  );
};

export default PlayersList;
