import './index.html';
import './style.scss';
import variables, { keyboard } from './components/variables';

const wrap = document.createElement('div');
const textField = document.createElement('textarea');
const keyboardWrap = document.createElement('div');

textField.className = 'text-field';
wrap.className = 'wrap';
keyboardWrap.className = 'keyboard';

const render = (upperCase) => {
  let char = 'alt';
  if (upperCase) {
    char = 'char';
  }
  Object.keys(keyboard).forEach((line) => {
    const raw = document.createElement('div');
    raw.className = 'raw';
    keyboard[line].forEach((key) => {
      const button = document.createElement('div');
      button.className = `button ${key.color}`;
      button.innerHTML = key[key[char] ? char : 'char'];
      button.setAttribute('char', key[key[char] ? char : 'char']);
      if (key.type) {
        switch (key.type) {
          case 'arrow':
            button.style.flexGrow = 0;
            break;
          case 'spacebar':
            button.innerText = '';
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
};
render(variables.upperCase);
wrap.append(textField);
wrap.append(keyboardWrap);
keyboardWrap.addEventListener('click', (e) => {
  if (e.target.classList.contains('button')) {
    const char = e.target.getAttribute('char');
    switch (char) {
      case 'Caps Lock':
        variables.upperCase = !variables.upperCase;
        keyboardWrap.innerHTML = '';
        render(variables.upperCase);
        wrap.append(keyboardWrap);
        break;
      default:
        textField.value += char;
        break;
    }
  }
});
document.title = variables.title;
document.body.append(wrap);
