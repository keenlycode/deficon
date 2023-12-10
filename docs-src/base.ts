import { Button } from 'gadjet/src/gadjet';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import shell from 'highlight.js/lib/languages/shell';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/base16/atlas.min.css';

import { Container, Paragraph, CodeBlock, Icon, color } from "./_base";


const __js_url = new URL(import.meta.url);

if ( ["localhost", "127.0.0.1", "0.0.0.0"].includes(__js_url.hostname) ) {
    new EventSource('/esbuild')
        .addEventListener('change', () => location.reload());
}

// Then register the languages you need
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('bash', shell);
hljs.registerLanguage('html', html);
hljs.highlightAll();

Button.define('button');
Button.tagStyle({
    color: color.palette.purple
})
Container.define('el-container');
Icon.define('el-icon');
Paragraph.define('el-paragraph');
CodeBlock.define('el-code-block');