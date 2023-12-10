## Quick start
---
Use with **jsdelivr** 

<el-code-block>
    <div el="title">HTML</div>

```html
<script defer type="module">
import { DefIcon } from '//cdn.jsdelivr.net/npm/@devcapsule/deficon@2.0/+esm';

class Icon extends DefIcon({ url: 'url_to_svgdef_icons'}) {};

customElements.define('el-icon', Icon);
</script>
<body>
    <el-icon name="applause"></el-icon>
</body>
```
</el-code-block>

### NPM

<el-code-block>
    <div el="title">shell</div>

```shell
$ npm i @devcapsule/deficon
```
</el-code-block>