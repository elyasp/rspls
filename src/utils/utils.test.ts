import { getResults } from "./getResults";
import * as redux from "react-redux";

describe("Dispatch mock", () => {
  const useDispatchSpy = jest.spyOn(redux, "useDispatch");
  const mockDispatchFn = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatchFn);

  it("should return scenario based on random index", () => {
    const expectedRound = {
      handOne: "scissors",
      handTwo: "paper",
      punchline: "Scissors cut Paper!",
    };

    expect(getResults(0, 1, mockDispatchFn)).toStrictEqual(expectedRound);
  });
  it("should dispatch score action when player one wins", () => {
    // 0 is scissors, 1 is paper
    getResults(0, 1, mockDispatchFn);

    expect(mockDispatchFn).toHaveBeenCalledTimes(1);

    useDispatchSpy.mockClear();
  });
  it("should dispatch score action when player two wins", () => {
    // 1 is paper, 0 is scissors
    getResults(1, 0, mockDispatchFn);

    expect(mockDispatchFn).toHaveBeenCalledTimes(1);

    useDispatchSpy.mockClear();
  });
  it("should not dispatch score actions when draw", () => {
    getResults(0, 0, mockDispatchFn);

    expect(mockDispatchFn).toHaveBeenCalledTimes(0);

    useDispatchSpy.mockClear();
  });
});
