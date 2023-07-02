import babel from 'rollup-plugin-babel';

export default {
  input: 'ChatLibrary.jsx',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
  },
  external: ['react'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
  ],
};
