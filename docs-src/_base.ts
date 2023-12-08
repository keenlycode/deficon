import { Adapter, AdapterMixin } from "@devcapsule/adapter";
import { DefIcon } from "@devcapsule/deficon";
import "./base.style";

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

class Icon extends AdapterMixin(
    DefIcon({ url: icon_url.toString() })
) {};
Icon.tagStyle(`
    fill: currentColor;
`)

export { Container, Paragraph, Icon, color };