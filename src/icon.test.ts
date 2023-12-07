import { JSDOM } from 'jsdom';
import { DefIconMixin } from './icon';

const { document } = new JSDOM(`
    <!DOCTYPE html><html><head></head><body></body></html>
`).window;

test('test', () => {
    class IcoMoon extends DefIconMixin(HTMLElement) {};
    customElements.define('el-icon', IcoMoon);
    const icon = document.createElement('el-icon');
    document.body.append(icon);
    console.log(document.body.innerHTML);
});