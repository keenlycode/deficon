type Constructor<T = {}> = new (...args: any[]) => T;

class Icon {
    static url: string;

    set name(name: string) {
        this._element.setAttribute('name', name);
        this.render();
    }

    get name() {
        return this._element.getAttribute('name');
    }

    _element: HTMLElement;
    _class: typeof Icon;

    constructor(element: HTMLElement) {
        this._class = this.constructor as typeof Icon;
        this._element = element;
        this.render();

        const observer = new MutationObserver((mutationRecords, observer) => {
            this.observerCallback(mutationRecords, observer)
        })
        observer.observe(this._element, {attributes: true});
    }

    observerCallback(
            mutationRecords: MutationRecord[],
            observer: MutationObserver) {
                
        for (const mutation of mutationRecords) {
            if (mutation.type === "attributes") {
                if (mutation.attributeName === "name") {
                    this.render();
                }
            }
        }
    }

    render() {
        if (!this._class.url) {
            return;
        }
        let svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg");
        let use = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'use');

        this._element.innerHTML = '';
        svg.style.width = '1em';
        svg.style.height = '1em';
        this._element.appendChild(svg);
        use.setAttributeNS(
            'http://www.w3.org/1999/xlink',
            'xlink:href',
            `${this._class.url}#${this.name}`);
        svg.appendChild(use);
    }
}

interface IconParam {
    url: string;
    deficonField?: any;    
}

function DefIconMixin<TBase extends Constructor<HTMLElement>>(
        Base: TBase,
        {url, deficonField='deficon'}: IconParam
    ) {

    class _Icon extends Icon {};
    _Icon.url = url;

    return class DefIconMixin extends Base {
        [key: string]: any;

        constructor(...args: any[]) {
            super(...args);
            this[deficonField] = new _Icon(this);
        };
    }
}

function DefIcon(param: IconParam) {
    return class DefIcon extends DefIconMixin(HTMLElement, param) {};
}

export { DefIconMixin, DefIcon };