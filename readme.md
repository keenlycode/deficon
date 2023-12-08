# DefIcon - 2.0.x

## Usage
> **SVG Definitions to Icon Component for Web Application**

```js
// Javascript
import { DefIcon } from '@devcapsule/deficon';

class Icon extends DefIcon({
    url: './icon.svg'}) {};

customElements.define('el-icon', Icon);
```

```html
<!-- html -->
<el-icon name="audio-speakers"></el-icon>
```

### Using Mixin

Mixin is more flexible and can extends other `HTMLElement` Component.
```js
// Javascript
import { DefIconMixin } from '@devcapsule/deficon';

class Icon extends DefIconMixin({url: './icon.svg'}, HTMLElement) {};

// The rest is the same.
customElements.define('el-icon', Icon);
// ...
```

## Development

### Environment Required
- NodeJS
- Python

### Run Test
```shell
npm run test
```
Test in watch mode
```shell
npm run test-watch
```

### Build documentation
```shell
npm run docs
```

### Build distribution files
```shell
npm run dist
```