import { test, expect } from '@jest/globals';
import { DefIcon } from './deficon';


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