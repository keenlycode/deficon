import { Adapter } from '@devcapsule/adapter';
import { bgColor } from 'gadjet/src/gadjet';
import { color } from './_base';

const css = String.raw;

const __js_url = new URL(import.meta.url);

if ( ["localhost", "127.0.0.1"].includes(__js_url.hostname) ) {
    new EventSource('/esbuild')
        .addEventListener('change', () => location.reload());
}

class Impress extends Adapter {};
Impress.tagStyle(css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    width: 100%;
    background-color: red;
    text-align: center;
    margin: auto;
    padding-bottom: 2rem;
    padding-top: 2rem;
    ${bgColor(color.palette.blue)}
    & h1 {
        margin: 0;
    }
    & el-icon {
        font-size: 3rem;
    }
`)

Impress.define('el-impress');