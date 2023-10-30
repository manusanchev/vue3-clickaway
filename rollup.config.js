import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
    input: './src/index.ts',
    output: {
        file: 'index.js',
        format: 'cjs',
        sourcemap: true
    },
    plugins: [
        typescript(),
        resolve(),
        terser()
    ]
};
