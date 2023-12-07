import { AdapterMixin } from '@devcapsule/adapter';
import { DefIcon } from '../src/deficon';

new EventSource('/esbuild').addEventListener('change', () => location.reload());

class Icon extends AdapterMixin(DefIcon({url: '//keenlycode.github.io/gnomicon/lib/gnomicon/icon.svg'})) {};

Icon.define('el-icon');
Icon.tagStyle(`fill: red;`);