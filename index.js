export function createButton(buttonText) {
  const elemButton = document.createElement('button');
  elemButton.textContent = `<button>${buttonText}</button>`;
  const elemBody = document.querySelector('body');
  elemBody.append(elemButton);
}
