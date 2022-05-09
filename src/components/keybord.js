export default class Keyboard {
  constructor(element, keyboardLayout, container) {
    this.element = element;
    this.keyboardLayout = keyboardLayout;
    this.container = container;
  }

  render(upperCase) {
    this.element.innerHTML = '';
    let char = 'alt';
    if (upperCase) {
      char = 'char';
    }
    Object.keys(this.keyboardLayout).forEach((line) => {
      const raw = document.createElement('div');
      raw.className = 'raw';
      this.keyboardLayout[line].forEach((key) => {
        const button = document.createElement('div');
        button.className = `button ${key.color}`;
        button.innerHTML = key[key[char] ? char : 'char'];
        button.setAttribute('data-char', key[key[char] ? char : 'char']);
        if (key.char) {
          switch (key.char) {
            case 'arrow':
              button.style.flexGrow = 0;
              break;
            case 'Space':
              button.innerText = '';
              button.style.width = '50%';
              break;
            case 'RightShift':
              button.innerText = 'Shift';
              button.style.flexGrow = 0;
              button.style.padding = 0;
              break;
            case 'CapsLock':
              if (upperCase) {
                button.classList.add('active');
              }
              button.innerText = 'Caps Lock';
              break;
            case 'Control':
              button.innerText = 'Ctrl';
              break;
            default:
              break;
          }
        }
        raw.append(button);
      });
      this.element.append(raw);
    });
    this.container.append(this.element);
  }
}
