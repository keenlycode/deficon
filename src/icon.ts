export class Icon extends HTMLElement {
    static href: string;
    src: string;
    name: string;

    constructor() {
        super();
        this.src = this.getAttribute('src');
        this.name = this.getAttribute('name');
        this.render();
    };

    render() {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let use = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'use');

        this.innerHTML = '';

        if (this.src) {
            const img = document.createElement('img');
            img.src = this.src;
            img.style.height = '1em';
            this.append(img);
        } else if (this.name) {
            svg.style.width = '1em';
            svg.style.height = '1em';
            this.appendChild(svg);
            use.setAttributeNS(
                'http://www.w3.org/1999/xlink',
                'xlink:href',
                `${this.constructor.href}#${this.name}`);
            svg.appendChild(use);
        }
    }
};