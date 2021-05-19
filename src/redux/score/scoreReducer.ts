import { SCORE_PLAYER_ONE, SCORE_PLAYER_TWO } from "./scoreTypes";

const initialState = {
  playerOneScore: 0,
  playerTwoScore: 0,
};

export const score = (state = initialState, action) => {
  switch (action.type) {
    case SCORE_PLAYER_ONE:
      return {
        ...state,
        playerOneScore: state.playerOneScore + action.payload,
      };
    case SCORE_PLAYER_TWO:
      return {
        ...state,
        playerTwoScore: state.playerTwoScore + action.payload,
      };
    default:
      return state;
  }
};
