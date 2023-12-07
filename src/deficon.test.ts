import { JSDOM } from 'jsdom';
import { test, expect } from '@jest/globals';
import { DefIconMixin, DefIcon } from './deficon';

const { document } = new JSDOM(`
    <!DOCTYPE html><html><head></head><body></body></html>
`).window;

test('Usage', () => {
    class Icon extends DefIcon({url:'./asset/dummy-icon.svg'}) {};
    customElements.define('el-icon', Icon);
    const icon = new Icon();
});