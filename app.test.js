import { test, expect } from "vitest";

import { isPalindrome } from "./app.js";

test(`check is isPalindrome works 'racecar'`, function () {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("fooba")).toBe(false);
});
