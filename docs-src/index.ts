import { DefIconMixin, DefIcon } from '../src/icon';

new EventSource('/esbuild').addEventListener('change', () => location.reload());

class Icon1 extends DefIconMixin({url: './asset/icon.svg'}, HTMLElement) {};
class Icon2 extends DefIcon({url:'aa'}) {};

customElements.define('el-icon1', Icon1);
customElements.define('el-icon2', Icon2);
const icon1 = new Icon1();
icon1.deficon.name = 'applause';
document.body.append(icon1);

const icon2 = new Icon2();
icon2.name = 'test';
document.body.append(icon2);