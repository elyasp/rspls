import { ADD_PLAYERS } from "./playerTypes";

export const players = (state = {}, action) => {
  switch (action.type) {
    case ADD_PLAYERS:
      return {
        ...state,
        playerOne: action.payload.playerOne,
        playerTwo: action.payload.playerTwo,
      };
    default:
      return state;
  }
};
