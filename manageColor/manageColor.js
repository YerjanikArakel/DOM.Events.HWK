const textColorInput = document.querySelector(".textColor");
const bgColorInput = document.querySelector(".bgColor");
const textBox = document.querySelector(".text");
const errorBox = document.querySelector(".errorBox");

const applyBtn = document.querySelector(".applyBtn");

textBox.style.border = "2px solid red";
textBox.style.width = "450px";
textBox.style.padding = "15px";

applyBtn.addEventListener("click", function () {
  let colorValue = textColorInput.value;
  let bgColorValue = bgColorInput.value;

  if (colorValue[0] === "#") {
    textBox.style.color = colorValue;
    textColorInput.value = "";
  } else {
    textColorInput.style.backgroundColor = "red";
    errorBox.innerText =
      "please add correct value for Text color. It isn't hexadecimal value ";
  }

  if (bgColorValue[0] === "#") {
    textBox.style.backgroundColor = bgColorValue;
    bgColorInput.value = "";
  } else {
    bgColorInput.style.backgroundColor = "red";
    errorBox.innerText =
      "please add correct value for Background color. It isn't hexadecimal value ";
  }
});
