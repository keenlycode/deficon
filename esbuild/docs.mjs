import * as esbuild from 'esbuild';
import { glob } from 'glob';

let files = await glob('docs-src/**/*.ts');

const server = await esbuild.context({
    entryPoints: files,
    outdir: 'docs',
    bundle: true,
    format: "esm",
    target: "chrome100",
    minify: true,
    sourcemap: true,
    keepNames: true,
})

await server.watch();

let { host, port } = await server.serve({
    servedir: 'docs'
})

console.log(`ESbuild http server: http://${host}:${port}`);