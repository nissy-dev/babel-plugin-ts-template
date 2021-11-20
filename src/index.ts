import { PluginObj } from "@babel/core";

interface PluginOptions {
  opts: {
    option1: boolean;
  };
}

export default function (): PluginObj<PluginOptions> {
  return {
    name: "babel-plugin-ts-template",
    visitor: {
      VariableDeclaration(path, state) {
        if (path.node.kind === "var" && state.opts.option1) {
          path.node.kind = "const";
        }
      },
    },
  };
}
