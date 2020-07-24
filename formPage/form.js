const form = document.querySelector(".container");
const submitButton = document.querySelector(".submit-button");

function myFunction() {
  let elements = form.elements;
  let obj = {};
  for (let i = 0; i < elements.length; i++) {
    let item = elements.item(i);
    obj[item.id] = item.value;
  }

  alert(JSON.stringify(obj));
}

submitButton.addEventListener("click", myFunction);
