const inputChange = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

inputChange.addEventListener('change', (event) => {
    textSpan.style.fontSize = `${event.target.value}px`;
});