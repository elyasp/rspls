import { ADD_PLAYERS } from "./playerTypes";

export const addPlayers = (playerOne = "Player 1", playerTwo = "Player 2") => {
  return {
    type: ADD_PLAYERS,
    payload: { playerOne, playerTwo },
  };
};
