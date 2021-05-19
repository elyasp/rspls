import {
  CURRENT_GAME_SITUATION,
  IS_GAME_STARTED,
  ADD_PLAYER_PICKS,
} from "./gameTypes";

const initialState = {
  hasStarted: false,
  picks: {},
  situation: "",
};

export const game = (state = initialState, action) => {
  switch (action.type) {
    case IS_GAME_STARTED:
      return {
        ...state,
        hasStarted: action.payload,
      };
    case ADD_PLAYER_PICKS:
      return {
        ...state,
        picks: action.payload,
      };
    case CURRENT_GAME_SITUATION:
      return {
        ...state,
        situation: action.payload,
      };
    default:
      return state;
  }
};
