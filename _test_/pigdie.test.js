import { rollDice } from "../src/pigdie";

describe('rollDice', () => {

  test('should return a dice roll between values of 1-6', () => {
    const dice = rollDice(1,6);
    expect(dice).toBeLessThan(7);
    // expect(dice).toBeGreaterThan(1);
});
});