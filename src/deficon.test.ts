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
    icon.deficon.name = 'name';

    console.log('Expect icon element to contains svg node');
    expect(icon.querySelector('svg') instanceof SVGSVGElement).toBe(true);
    expect(
        icon.querySelector('use')?.getAttribute('xlink:href')
            === `${icon.deficon._class.url}#${icon.deficon.name}`
    ).toBe(true);
});

test('Error when not provide URL', () => {
    class Icon extends DefIcon({url: ''}) {};
})