import UserAge from "../src/earth";

describe('UserAge', () => {
  test('it should return an object with an inputted age in earth years & days',() => {
  const userAge = new UserAge(28);
  expect(userAge.years).toEqual(28);
  expect(userAge.days).toEqual(10220);
  });
});