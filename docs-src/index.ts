import { AdapterMixin } from '@devcapsule/adapter';
import { DefIcon } from '../src/deficon';


const __js_url = new URL(import.meta.url);

if ( ["localhost", "127.0.0.1"].includes(__js_url.hostname) ) {
    new EventSource('/esbuild')
        .addEventListener('change', () => location.reload());
}

class Icon extends AdapterMixin(DefIcon({url: './asset/icon.svg'})) {};

Icon.define('el-icon');
Icon.tagStyle(`fill: red;`);