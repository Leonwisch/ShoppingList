const packageManifest = require("../package.json");

test("the project exposes test and lint commands", () => {
  expect(packageManifest.scripts.test).toBe("jest --ci");
  expect(packageManifest.scripts.lint).toBe("eslint src __tests__");
});