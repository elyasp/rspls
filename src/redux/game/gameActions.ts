import {
  CURRENT_GAME_SITUATION,
  IS_GAME_STARTED,
  ADD_PLAYER_PICKS,
  RESET_GAME,
} from "./gameTypes";

export const startGame = (hasStarted: boolean) => {
  return {
    type: IS_GAME_STARTED,
    payload: hasStarted,
  };
};

export const addPicks = (playerOne: string, playerTwo: string) => {
  return {
    type: ADD_PLAYER_PICKS,
    payload: { playerOne, playerTwo },
  };
};

export const registerOutcome = (outcome: string) => {
  return {
    type: CURRENT_GAME_SITUATION,
    payload: outcome,
  };
};

export const resetGame = () => {
  return {
    type: RESET_GAME,
  };
};
