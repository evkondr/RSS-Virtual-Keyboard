import './index.html';
import './style.scss';
import variables, { keyboard } from './components/variables';

const wrap = document.createElement('div');

const keyboardWrap = document.createElement('div');

wrap.className = 'wrap';

keyboardWrap.className = 'keyboard'

for(let line in keyboard){
    const raw = document.createElement('div');
    raw.className = 'raw';
    console.log(raw)
    for(let key of keyboard[line]){
        const button = document.createElement('div');
        button.className = `button ${key.color}`;
        button.textContent = key.char;
        raw.append(button);
    }
    keyboardWrap.append(raw)
}
wrap.append(keyboardWrap)

document.title = variables.title;
document.body.append(wrap);
