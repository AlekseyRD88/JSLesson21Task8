export function createButton(buttonText) {
  const elemButton = document.createElement('button');
  const newButton = `<button>${buttonText}</button>`.textContent;
  elemButton.append(newButton, body);
}
