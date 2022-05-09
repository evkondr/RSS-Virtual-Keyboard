import './index.html';
import './style.scss';
import variables, { keyboard as keyboardLayout } from './components/variables';
import Keyboard from './components/keybord';
import eventHandler from './components/eventHandler';

const wrap = document.createElement('div');
const textField = document.createElement('textarea');
const keyboardWrap = document.createElement('div');

textField.className = 'text-field';
wrap.className = 'wrap';
keyboardWrap.className = 'keyboard';

const keyboard = new Keyboard(keyboardWrap, keyboardLayout, wrap);
document.title = variables.title;
wrap.append(textField);

keyboard.render(variables.upperCase);

document.body.append(wrap);
//  On button click
keyboardWrap.addEventListener('click', (e) => {
  if (e.target.classList.contains('button')) {
    const { char } = e.target.dataset;
    eventHandler(char, keyboard, textField);
  }
});

// On key press
document.addEventListener('keydown', (e) => {
  const key = document.querySelector(`div[data-char="${e.key === ' ' ? 'Space' : e.key}"]`);
  key.classList.add('active');
  eventHandler(e.key, keyboard, textField);
  document.addEventListener('keyup', () => {
    key.classList.remove('active');
  });
});
