import pluginTester from "babel-plugin-tester";
import myPlugin from "../src/index";

pluginTester({
  plugin: myPlugin,
  babelOptions: {
    parserOpts: {
      // If you want to parse typescript or jsx, these plugins are required
      plugins: ["jsx", "typescript"],
    },
  },
  filename: __filename,
  pluginOptions: {
    option1: true,
  },
  tests: {
    "basic test": {
      code: 'var a = "test";',
      output: 'const a = "test";',
    },
    "basic test using files": {
      fixture: "__fixtures__/sample.js",
      outputFixture: "__fixtures__/sample-out.js",
    },
    "snapshot test": {
      code: 'var a = "test";',
      snapshot: true,
    },
  },
});
