import * as babel from "@babel/core";

import plugin from "../src";

const config = {
  plugins: [[plugin, { option1: true }]],
};

// see: https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#exec-tests
describe("This is exec test (runtime checking)", () => {
  it("basic test", () => {
    const inputCode = `var foo = "test";`;
    const result = babel.transform(inputCode, config);
    const f = new Function(`
      ${result?.code}
      return foo
    `);
    expect(f()).toEqual("test");
  });
});
