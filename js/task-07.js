const inputSizeControlEl = document.querySelector("#font-size-control");
const inputTextEl = document.querySelector("#text");

const onInput = () => {
    inputTextEl.style.fontSize = `${inputSizeControlEl.value}px`;
};
inputSizeControlEl.addEventListener("input", onInput);
