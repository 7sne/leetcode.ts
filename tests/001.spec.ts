import { FirstSolution } from "../src/FirstSolution";
jest.mock("../src/FirstSolution");

beforeEach(() => {
  FirstSolution.mockClear();
});
