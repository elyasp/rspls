import { combineReducers } from "redux";
import { players } from "./players/playerReducer";
import { game } from "./game/gameReducer";
import { score } from "./score/scoreReducer";
import storage from "redux-persist/lib/storage";

const appReducer = combineReducers({
  players,
  game,
  score,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_GAME") {
    storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
