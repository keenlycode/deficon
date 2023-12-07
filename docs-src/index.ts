import { DefIconMixin } from '../src/icon';

new EventSource('/esbuild').addEventListener('change', () => location.reload());

class Icon1 extends DefIconMixin(HTMLElement, {url: './asset/icon.svg'}) {};
class Icon2 extends DefIconMixin(HTMLElement, {url: './asset/'}) {};

customElements.define('el-icon1', Icon1);
const icon = new Icon1();
icon.deficon.name = 'applause';
document.body.append(icon);

window.Icon1 = Icon1;
window.Icon2 = Icon2;