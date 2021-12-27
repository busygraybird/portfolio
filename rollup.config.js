import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import stylelint from 'stylelint';
import image from '@rollup/plugin-image';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    html({
      include: '**/*.html',
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
      'GITHUB_AUTH_TOKEN': process.env.REACT_APP_GITHUB_AUTH_TOKEN
    }),
    image(),
    resolve({
      jsnext: true,
      module: true,
      browser: true,
      extensions: ['.js'],
    }),
    commonjs({
      exclude: 'src/**',
    }),
    babel({
      babelHelpers: 'runtime',
      presets: [
        '@babel/preset-env',
        [
          "@babel/preset-react",
          { "runtime": "automatic" }
        ]
      ],
      plugins: ['@babel/plugin-transform-runtime']
    }),
    stylelint(),
    postcss({
      extract: false,
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        localsConvention: 'camelCaseOnly',
      },
      use: ['sass'],
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ['', 'public'],
      host: 'localhost',
      port: 3000,
    }),
    livereload({ watch: 'build' }),
  ],
};
