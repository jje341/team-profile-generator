const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");

test("getGithub() should return Engineer github", () => {
    const testGithub = "jje341";
    const engineer = new Engineer(
      "Adam Doe",
      2022,
      "Adam@email.com",
      testGithub
    );
    expect(engineer.getGithub()).toBe(testGithub);
  });