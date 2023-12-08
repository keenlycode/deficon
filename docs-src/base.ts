// Using ES6 import syntax
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import shell from 'highlight.js/lib/languages/shell';
import bash from 'highlight.js/lib/languages/bash'
import 'highlight.js/styles/base16/atlas.min.css';
import { Container, Paragraph, Icon } from "./_base";

// Then register the languages you need
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('bash', shell);
hljs.highlightAll();

Container.define('el-container');
Icon.define('el-icon');
Paragraph.define('el-paragraph');