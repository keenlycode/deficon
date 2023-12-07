type Constructor<T = {}> = new (...args: any[]) => T;

class _DefIcon {
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

interface DefIconParam {
    url: string;
    objectField?: any;
}

function DefIconMixin<TBase extends Constructor<HTMLElement>>(
        {url, objectField='deficon'}: DefIconParam,
        Base: TBase) {

    class _Def extends _DefIcon {};
    _Def.url = url;

    return class extends Base {
        [key: string]: any;

        constructor(...args: any[]) {
            super(...args);
            this[objectField] = new _Def(this);
        };
    }
}

function DefIcon(param: DefIconParam) {
    return class extends DefIconMixin(param, HTMLElement) {};
}

export { DefIconMixin, DefIcon };