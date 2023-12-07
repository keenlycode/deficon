import * as esbuild from 'esbuild';


const result = await esbuild.build({
    entryPoints: ['src/deficon.ts'],
    outfile: 'dist/deficon.min.js',
    bundle: true,
    format: "esm",
    target: "es6",
    minify: true,
    sourcemap: true,
    keepNames: true,
    metafile: true,
})

console.log(await esbuild.analyzeMetafile(result.metafile));