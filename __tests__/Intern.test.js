const inquirer = require("inquirer");
const Intern = require("../lib/Intern");

test('getRole() should return "Intern"', () => {
    const testValue = "Intern";
    const intern = new Intern("Chris", 1, "Chris@email.com", "UCLA");
    expect(intern.getRole()).toBe(testValue);
  });