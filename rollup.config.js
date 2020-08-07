import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: 'src/index.js',
  output: {
    file: "dist/v-sanitize.js",
    format: "esm",
  },
  plugins: [
    babel({ babelHelpers: 'runtime', skipPreflightCheck: true }),
    nodeResolve()
  ]
};
