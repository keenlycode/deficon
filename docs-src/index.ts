import { AdapterMixin } from '@devcapsule/adapter';
import { DefIcon } from '../src/deficon';

new EventSource('/esbuild').addEventListener('change', () => location.reload());

class Icon extends AdapterMixin(DefIcon({url: './asset/icon.svg'})) {};

Icon.define('el-icon');
Icon.tagStyle(`fill: red;`);