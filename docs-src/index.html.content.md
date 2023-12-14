## Quick start
---
### ES Module from JSDelivr

This example use SVG Definition Icon from
[Gnomicon Project](https://keenlycode.github.io/gnomicon/)

<el-code-block>
    <div el="title">HTML</div>

```html
<script defer type="module">
import { DefIcon } from '//cdn.jsdelivr.net/npm/@devcapsule/deficon@2.0/+esm';

class Icon extends DefIcon({ url: './asset/icon.svg'}) {};

customElements.define('el-icon', Icon);
</script>
<body>
    <el-icon name="applause"></el-icon>
    <el-icon name="wallet"></el-icon>
    <el-icon name="cat-sleeping"></el-icon>
</body>
```
</el-code-block>

<div style="font-size: 3rem;">
    <el-icon name="applause"></el-icon>
    <el-icon name="wallet"></el-icon>
    <el-icon name="cat-sleeping"></el-icon>
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

## Mixin
---
DefIcon provides mixin for extending other `HTMLElement` Component

```js
import { DefIconMixin } from '@devcapsule/deficon';

class Icon extends DefIconMixin(HTMLElement, {url: './asset/icon.svg'}) {};
```