// test/index.test.js
const { validateEmail, validatePassword } = require("../index");

describe("Email Validation", () => {
  it("should return true for a valid email", () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });

  // Add more test cases
});

describe("Password Validation", () => {
  it("should return true for a strong password", () => {
    expect(validatePassword("StrongPassword123")).toBe(true);
  });

  // Add more test cases
});
