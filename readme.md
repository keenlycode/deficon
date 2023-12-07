# DefIcon V2.0.0

> SVG Definitions to Icon Component for Web Application

```js
// Javascript
import { DefIcon } from '@devcapsule/deficon';

class Icon extends DefIcon({
    url: 'http://keenlycode.github.io/gnomicon/lib/gnomicon/icon.svg'}) {};

customElements.define('el-icon', Icon);
```

```html
<!-- html -->
<el-icon name="audio-speakers"></el-icon>
```

Using Mixin
```js
// Javascript
import { DefIconMixin } from '@devcapsule/deficon';

class Icon extends DefIconMixin({url: ''}, HTMLElement) {};

// The rest is the same.
customElements.define('el-icon', Icon);
// ...
```