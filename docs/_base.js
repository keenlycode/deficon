var x=Object.defineProperty;var r=(i,e)=>x(i,"name",{value:e,configurable:!0});function d(i,e,t=document.head){i.textContent=e,t.append(i)}r(d,"_addStyle");var l=class extends Error{static{r(this,"DOMError")}constructor(e){super(),this.message=e,this.name="DOMError"}};function o(i){var e;return e=class extends i{static{r(this,"_a")}static addStyle(t){let s=document.createElement("style");s.setAttribute("component",this.name),d(s,t,document.head)}static define(t){try{customElements.define(t,this)}catch(s){if(s instanceof DOMException)throw new l(`DOMException: '${this.name}' has already been defined to tag '${this.tagName}'`)}this.tagName=t,this.defineStyle()}static defineStyle(){let t="",s=[...Object.getPrototypeOf(this).styles,...this.styles];for(let n of s){let f=this.tagName;n.class_!==""&&(f=`${this.tagName}.${n.class_}`),t+=`
${f} { ${n.css} }`}this.addStyle(t)}static tagStyle(t){this.tagName&&this.addStyle(`
${this.tagName} { ${t} }`),this.styles=this.styles.concat({class_:"",css:t})}static classStyle(t,s){this.tagName&&this.addStyle(`
${this.tagName}.${t} { ${s} }`),this.styles=this.styles.concat({class_:t,css:s})}static _generate_id(){if(this.idsCount>1e4)throw new Error(`${this} instance exceed 10,000. Too many instances.`);let t="",s=0;for(;this.ids[t]===!0;)t=`${this.name}-${Math.floor(Math.random()*this.max_id).toString(16)}`,s++;return this.ids[t]=!0,this.idsCount++,t}constructor(...t){super(),this._class=this.constructor,this._id=this._class._generate_id()}addStyle(t){this.classList.add(this._id);let s=this.classList.value.replace(/ /g,"."),n=document.createElement("style");d(n,`${this.tagName}.${s} { ${t} }`,this)}},e.styles=[{class_:"",css:"all: unset;"}],e._is_styled=!1,e.max_id=Math.pow(16,4)-1,e.ids={},e.idsCount=0,e}r(o,"AdapterMixin");var a=o(HTMLElement);var c=class{static{r(this,"_Icon")}set name(e){this.element.setAttribute("name",e),this.render()}get name(){return this.element.getAttribute("name")}constructor(e){this._class=this.constructor,this.element=e,this.render(),new MutationObserver((s,n)=>{this.observerCallback(s,n)}).observe(this.element,{attributes:!0})}observerCallback(e,t){for(let s of e)s.type==="attributes"&&s.attributeName==="name"&&this.render()}render(){if(!this._class.url)return;let e=document.createElementNS("http://www.w3.org/2000/svg","svg"),t=document.createElementNS("http://www.w3.org/2000/svg","use");this.element.innerHTML="",e.style.width="1em",e.style.height="1em",this.element.appendChild(e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",`${this._class.url}#${this.name}`),e.appendChild(t)}};function w({url:i,objectField:e="deficon"},t){class s extends c{static{r(this,"__Icon")}}return s.url=i,class extends t{constructor(...n){super(...n),this[e]=new s(this)}}}r(w,"DefIconMixin");function y(i){return class extends w(i,HTMLElement){}}r(y,"DefIcon");var b=2,_=new URL(import.meta.url),S=new URL(`./asset/icon.svg?_v=${b}`,_),g=String.raw,$={palette:{blue:"#3584e4",green:"#33d17a",yellow:"#f6d32d",orange:"#ff7800",red:"#e01b24",purple:"#9141ac",brown:"#986a44",light:"#deddda",dark:"#3d3846"}},h=class extends a{static{r(this,"Container")}};h.tagStyle(g`
    display: block;
    margin: auto;
    width: 90%;
    max-width: 1000px;
    min-width: 300px;
    box-sizing: border-box;
`);var m=class extends a{static{r(this,"Paragraph")}};m.tagStyle(g`
    display: block;
    margin: auto;
    width: 100%;
    max-width: 80ch;
    width: 100%;
`);var u=class extends a{static{r(this,"CodeBlock")}};u.tagStyle(g`
    display: block;
    & [el="title"] {
        display: inline-flex;
        align-items: center;
        line-height: 2;
        border: 2px solid ${$.palette.blue};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-left: 0.5rem;
        font-size: 0.8rem;
        position: relative;
        top: 2px;
        z-index: -1;
    }
    & pre {
        margin: 0;
    }
`);var p=class extends o(y({url:S.toJSON()})){static{r(this,"Icon")}};p.tagStyle(`
    fill: currentColor;
`);export{u as CodeBlock,h as Container,p as Icon,m as Paragraph,$ as color};
//# sourceMappingURL=_base.js.map
