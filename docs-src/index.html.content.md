## Quick start
---
### ES Module from JSDelivr

This example use SVG Definition Icon from
[Gnomicon Project](https://keenlycode.github.io/gnomicon/).
Or you can download Icons from [here](https://unpkg.com/gnomicon@45.1.2/dist/icon.svg.gz)
and put on your server in the same domain as your web page.

<el-code-block>
    <div el="title">HTML</div>

```html
<script defer type="module">
import { DefIcon } from '//cdn.jsdelivr.net/npm/@devcapsule/deficon@2.0/+esm';

class Icon extends DefIcon({ url: './asset/icon.svg'}) {};

customElements.define('el-icon', Icon);
</script>
<body>
    <div style="font-size: 3rem;">
        <el-icon name="applause"></el-icon>
        <el-icon name="wallet" style="fill: red;"></el-icon>
        <el-icon name="cat-sleeping" style="font-size: 2rem;"></el-icon>
    </div>
</body>
```
</el-code-block>

<div style="font-size: 3rem;">
    <el-icon name="applause"></el-icon>
    <el-icon name="wallet" style="fill: red;"></el-icon>
    <el-icon name="cat-sleeping" style="font-size: 2rem;"></el-icon>
</div>

### NPM & JS Build Tools

<el-code-block>
    <div el="title">shell</div>

```shell
$ npm i @devcapsule/deficon
```
</el-code-block>

<el-code-block style="margin-top: 1rem;">
    <div el="title">Javascript</div>

```js
import { DefIcon } from '@devcapsule/deficon';
```
</el-code-block>

## More SVG Def Icons
---
You can generate and download more **SVG Def Icons** from [IcoMoon](https://icomoon.io/)

## Mixin
---
DefIcon provides mixin for extending other `HTMLElement` Component

```js
import { DefIconMixin } from '@devcapsule/deficon';

class Icon extends DefIconMixin(HTMLElement, {url: './asset/icon.svg'}) {};
```

## Just that !! Have  a nice day 🥳