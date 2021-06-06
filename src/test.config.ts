// import typescript from 'rollup-plugin-typescript2'
// import externals from 'rollup-plugin-node-externals'
// import shebang from 'rollup-plugin-add-shebang'

import path from 'path'

export default [
  {
    input: path.resolve('src/index.ts'),
    output: [
      {
        file: './dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: './dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    // plugins: [typescript()],
  },
  {
    input: './src/bin.ts',
    plugins: [
      // typescript({
      //   tsconfigOverride: {
      //     compilerOptions: {
      //       declaration: false,
      //       declarationMap: false,
      //     },
      //   },
      // }),
      // externals(),
      // shebang({
      //   include: ['./dist/bin.js'],
      // }),
    ],
    output: {
      file: './dist/bin.js',
      format: 'cjs',
      sourcemap: true,
    },
  },
]
