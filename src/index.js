import './index.html';
import './style.scss';
import variables, { keyboard } from './components/variables';

const wrap = document.createElement('div');
const button = document.createElement('div');
wrap.className = 'wrap';
button.className = 'button';
for(let item of keyboard.line_1) {
    let btn = button.innerText = item.char
    wrap.append(btn)
}
document.head.innerHTML = variables.title;
document.body.append(wrap);
