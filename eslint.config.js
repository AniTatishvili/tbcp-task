import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import parser from "@typescript-eslint/parser";

const tsEslintConfigs = tsEslintPlugin.configs.recommended.rules;
const reactConfigs = pluginReact.configs.flat.recommended.rules;

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    parser: parser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
      react: pluginReact,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      ...pluginJs.configs.recommended.rules,
      ...tsEslintConfigs,
      ...reactConfigs,
    },
  },
];
