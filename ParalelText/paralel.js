const textBox = document.querySelector(".textBox");
const textInput = document.querySelector(".textInput");

document.addEventListener("keyup", (event) => {
  return (textBox.textContent = textInput.value);
});
