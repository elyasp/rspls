import { addPlayers } from "../players/playerActions";
import { players } from "../players/playerReducer";

describe("Player Actions", () => {
  it("should create an action to add players", () => {
    const expectedAction = {
      type: "ADD_PLAYERS",
      payload: { playerOne: "Wendy", playerTwo: "Player 2" },
    };

    expect(addPlayers("Wendy")).toEqual(expectedAction);
  });
});

describe("Player reducer", () => {
  const initialState = {};

  it("should return the initial state", () => {
    expect(players(undefined, {})).toEqual(initialState);
  });

  it("should handle adding players", () => {
    expect(players(initialState, addPlayers())).toEqual({
      ...initialState,
      playerOne: "Player 1",
      playerTwo: "Player 2",
    });
  });
});
