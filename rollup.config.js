import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'directive.ts',
    output: {
        file: 'index.js',
        format: 'cjs',
        sourcemap: true
    },
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
        terser()
    ]
};
