import { Adapter, AdapterMixin } from "@devcapsule/adapter";
import { DefIcon } from "@devcapsule/deficon";

const __file_url = new URL(import.meta.url);
const icon_url = new URL("./asset/icon.svg", __file_url);

const css = String.raw;

const color = {
    palette: {
        blue: "#3584e4",
        green: "#33d17a",
        yellow: "#f6d32d",
        orange: "#ff7800",
        red: "#e01b24",
        purple: "#9141ac",
        brown: "#986a44",
        light: "#deddda",
        dark: "#3d3846"
    }
}

class Container extends Adapter {};
Container.tagStyle(css`
    display: block;
    margin: auto;
    width: 90%;
    max-width: 1000px;
    min-width: 300px;
    box-sizing: border-box;
`);

class Paragraph extends Adapter {};
Paragraph.tagStyle(css`
    display: block;
    margin: auto;
    width: 100%;
    max-width: 80ch;
    width: 100%;
`)

class CodeBlock extends Adapter {};
CodeBlock.tagStyle(css`
    display: block;
    & [el="title"] {
        display: inline-flex;
        align-items: center;
        line-height: 2;
        border: 2px solid ${color.palette.blue};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-left: 0.5rem;
        font-size: 0.8rem;
        position: relative;
        top: 2px;
        z-index: -1;
    }
    & pre {
        margin: 0;
    }
`)

class Icon extends AdapterMixin(
    DefIcon({ url: icon_url })
) {};
Icon.tagStyle(`
    fill: currentColor;
`)

export { Container, Paragraph, CodeBlock, Icon, color };