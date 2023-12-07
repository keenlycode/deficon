type Constructor<T = {}> = new (...args: any[]) => T;

class DefIcon {
    static url: string;
    element: HTMLElement;

    set name(name: string) {
        this.element.setAttribute('name', name);
        this.render();
    }

    get name() {
        return this.element.getAttribute('name');
    }

    constructor(element: HTMLElement) {
        this.element = element;
        this.render();
    }

    render() {
        if (!this.constructor.url) {
            return;
        }
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let use = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'use');

        this.element.innerHTML = '';
        svg.style.width = '1em';
        svg.style.height = '1em';
        this.element.appendChild(svg);
        use.setAttributeNS(
            'http://www.w3.org/1999/xlink',
            'xlink:href',
            `${this.constructor.url}#${this.name}`);
        svg.appendChild(use);
    }
}

interface DefIconMixinOption {
    url: string;
    cls?: any;
    obj?: any;
}

function DefIconMixin<TBase extends Constructor<HTMLElement>>(
        Base: TBase, {url='', cls=DefIcon, obj='deficon'}: DefIconMixinOption) {

    class DefIcon extends cls {};
    DefIcon.url = url;

    return class extends Base {
        static DefIcon = DefIcon;
        [key: string]: any;

        constructor(...args: any[]) {
            super();
            this[obj] = new this.constructor.DefIcon(this);
        };
    }
}

export { DefIconMixin };