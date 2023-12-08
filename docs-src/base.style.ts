import { addStyle } from "@devcapsule/adapter";
import { fontFluid } from "gadjet/src/style/font-fluid";

const __file_url = new URL(import.meta.url);
const font_kanit_url = new URL('./asset/font/kanit/Kanit-Regular.ttf', __file_url.href);


const css = String.raw;

addStyle(css`
@font-face {
    font-family: sans;
    src: url(${font_kanit_url});
}

html {
    font-family: sans;
    letter-spacing: 0.1cap;
    ${fontFluid({
        vwMin: 300, vwMax: 1000,
        fontSizeMin: 14, fontSizeMax: 20
    })}
}

body {
    margin: 0;
    padding: 0;
}
h1, h2 {
    box-sizing: border-box;
    line-height: 1.7;
}
`);
