export class Icon extends HTMLElement {
    static href: string;
    name: string | null;

    constructor() {
        super();
        this.name = this.getAttribute('name');
        this.render();
    }

    render() {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let use = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'use');

        this.innerHTML = '';
        svg.style.width = '1em';
        svg.style.height = '1em';
        this.appendChild(svg);
        use.setAttributeNS(
            'http://www.w3.org/1999/xlink',
            'xlink:href',
            `${(this.constructor as typeof Icon).href}#${this.name}`);
        svg.appendChild(use);
    }
}
