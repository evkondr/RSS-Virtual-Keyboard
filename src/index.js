import './index.html';
import './style.scss';
import variables, { keyboard } from './components/variables';

const wrap = document.createElement('div');

const keyboardWrap = document.createElement('div');

wrap.className = 'wrap';

keyboardWrap.className = 'keyboard';
Object.keys(keyboard).forEach((line) => {
  const raw = document.createElement('div');
  raw.className = 'raw';
  keyboard[line].forEach((key) => {
    const button = document.createElement('div');
    button.className = `button ${key.color}`;
    button.innerHTML = key.char;
    if (key.type) {
      switch (key.type) {
        case 'arrow':
          button.style.flexGrow = 0;
          break;
        case 'spacebar':
          button.style.width = '50%';
          break;
        case 'right_shift':
          button.style.flexGrow = 0;
          button.style.padding = 0;
          break;
        default:
          break;
      }
    }
    raw.append(button);
  });
  keyboardWrap.append(raw);
});
wrap.append(keyboardWrap);

document.title = variables.title;
document.body.append(wrap);
