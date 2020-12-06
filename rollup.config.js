import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"

const env = process.env.NODE_ENV

export default [
  {
    input: "index.tsx",
    output: [
      {
        // file: pkg.main, // 生成多个文件要用dir
        dir: "dist",
        entryFileNames:"index.cjs.js", // 用 dir 就不能用 file ，用这个字段指定名称
        format: "cjs", // commomjs 的模块模式 umd 是全能模式 iife是浏览器模式
        exports: "named",
        sourcemap: true,
        strict: false,
      },
      {
        // file: pkg.main, // 生成多个文件要用dir
        dir: "dist",
        entryFileNames:"index.esm.js",
        format: "es", // es 6 的模块模式 webpack优先选择这个，可以 tree shaking
        exports: "named",
        sourcemap: true,
        strict: false,
      }
    ],
    plugins: [
      typescript(),
      nodeResolve(),
      commonjs(),
      replace({
        "process.env.NODE_ENV": JSON.stringify(env),
      }),
    ],
    external: ["react", "react-dom", "@byte-design/ui"],
  },
]
