import * as esbuild from 'esbuild';

await esbuild.build({
    entryPoints: ['src/icon.ts'],
    outfile: 'dist/icon.min.js',
    bundle: true,
    minify: true,
    sourcemap: true,
    target: "chrome100",
})