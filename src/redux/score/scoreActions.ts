import { SCORE_PLAYER_ONE, SCORE_PLAYER_TWO } from "./scoreTypes";

export const scorePlayerOne = () => {
  return {
    type: SCORE_PLAYER_ONE,
    payload: 1,
  };
};

export const scorePlayerTwo = () => {
  return {
    type: SCORE_PLAYER_TWO,
    payload: 1,
  };
};
