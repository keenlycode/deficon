import { Icon } from '@nitipit/icon/src/icon';
import { addStyle } from 'gadjet/src/style/add-style';
import { fontFluid } from 'gadjet/src/style/font-fluid';

Icon.href = 'adwaita.svg';
customElements.define('el-icon', Icon);

addStyle`
html {
    ${fontFluid()}
}
`