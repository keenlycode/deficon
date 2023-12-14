import { addStyle } from "@devcapsule/adapter";
import { fontFluid, bgColor } from "gadjet/src/gadjet";
import { color } from './_base';


const __file_url = new URL(import.meta.url);
const font_sans_serif_url = new URL('./asset/font/Fira_Sans/FiraSans-Regular.ttf', __file_url.href);
const font_monospace_url = new URL('./asset/font/Fira_Code/FiraCode-Regular.ttf', __file_url.href);

const css = String.raw;

console.log(color);
addStyle(css`
@font-face {
    font-family: sans-serif;
    src: url(${font_sans_serif_url});
}

@font-face {
    font-family: monospace;
    src: url(${font_monospace_url});
}

html {
    font-family: sans-serif;
    ${fontFluid({
        vwMin: 300, vwMax: 1000,
        fontSizeMin: 14, fontSizeMax: 20
    })}
}

code {
    font-family: monospace;
    ${bgColor(color.palette.dark)}
    padding: 0.1rem 0.4rem;
    border-radius: 0.4rem;
}

body {
    margin: 0;
    padding: 0;
    padding-bottom: 10rem;
}
h1, h2 {
    box-sizing: border-box;
    line-height: 1.7;
}

pre > code.hljs {
    font-size: 0.9rem;
    border-radius: 10px;
    ${fontFluid({
        vwMin: 300, vwMax: 1000,
        fontSizeMin: 12, fontSizeMax: 16,        
    })}
}

.width-100 {
    box-sizing: border-box;
    width: 100%;
}

.width-50 {
    box-sizing: border-box;
    width: 50%;
}
`);
