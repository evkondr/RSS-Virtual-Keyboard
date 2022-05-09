import variables from './variables';
import backspace from './backspace';

export default function eventHandler(target, keyboard, textField) {
  const textFieldNode = textField;
  switch (target) {
    case 'CapsLock':
      variables.upperCase = !variables.upperCase;
      keyboard.render(variables.upperCase);
      break;
    case 'Backspace':
      textFieldNode.value = backspace(textField);
      break;
    case 'Tab':
    case 'Control':
    case 'Shift':
    case 'Alt':
      break;
    default:
      textFieldNode.value += target;
      break;
  }
}
