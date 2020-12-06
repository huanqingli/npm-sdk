import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const env = process.env.NODE_ENV

export default [
  {
    input: "demo/demo.tsx",
    output: [
      {
        file: "dev/demo.js",
        name: "demo.js",
        format: "iife",
        exports: "named",
        sourcemap: true,
        strict: false,
      },
    ],
    plugins: [
      typescript({tsconfig: "tsconfig.dev.json"}),
      nodeResolve(),
      commonjs(),
      replace({
        "process.env.NODE_ENV": JSON.stringify(env),
      }),
      serve(), // index.html should be in root of project
      livereload(),
    ],
  },
]
