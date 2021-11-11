// import multi from '@rollup/plugin-multi-entry';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
// import typescript from '@rollup/plugin-typescript';
// import json from '@rollup/plugin-json';
import { nodeResolve } from "@rollup/plugin-node-resolve";

// import multiInput from 'rollup-plugin-multi-input';

export default {
  input: ["./src/main.ts"],
  // input: ["./src/index.js"],
  // input: ["./src/**/*.js"], // Multi files
  output: [
    {
      file: "./build/amd.js",
      format: "esm",
      name: "tmhao",
    },
  ],
  plugins: [
    // multi(),
    nodeResolve({
      // resolve most likely: dist/main.esm
      browser: true,
    }),
    typescript(),
    commonjs(),
    // json(),
  ],
};
