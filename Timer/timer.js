const dateConteiner = document.querySelector(".dateConteiner");

const yearButton = document.querySelector(".yearSubmit");
const yearBox = document.querySelector(".yearBox");

const mountSubmit = document.querySelector(".mountSubmit");
const mountBox = document.querySelector(".mountBox");

const daySubmit = document.querySelector(".daySubmit");
const dayBox = document.querySelector(".dayBox");

const timeSubmit = document.querySelector(".timeSubmit");
const timeBox = document.querySelector(".timeBox");

const showAll = document.querySelector(".showAll");

const hideButton = document.querySelector(".hide-time");
let date = new Date();

const mountFix = function () {
  switch (date.getMonth()) {
    case 0:
      mountBox.innerText = "January";
      break;
    case 1:
      mountBox.innerText = "February";
      break;
    case 2:
      mountBox.innerText = "March";
      break;
    case 3:
      mountBox.innerText = "April";
      break;
    case 4:
      mountBox.innerText = "May";
      break;
    case 5:
      mountBox.innerText = "June";
      break;
    case 6:
      mountBox.innerText = "July";
      break;
    case 7:
      mountBox.innerText = "Augost";
      break;
    case 8:
      mountBox.innerText = "September";
      break;
    case 9:
      mountBox.innerText = "October";
      break;
    case 10:
      mountBox.innerText = "November";
      break;
    case 11:
      mountBox.innerText = "December";
      break;
  }
  dateConteiner.style.display = "block";
  mountBox.style.display = "inline-flex";
};

mountSubmit.addEventListener("click", mountFix);

const dayFix = function () {
  dayBox.innerText = date.getDate();
  dateConteiner.style.display = "block";
  dayBox.style.display = "inline-flex";
};

daySubmit.addEventListener("click", dayFix);

const yearFix = function () {
  yearBox.innerText = date.getFullYear();
  dateConteiner.style.display = "block";
  yearBox.style.display = "inline-flex";
};

function stopRefresh() {
  clearInterval(refreshTime);
}
yearButton.addEventListener("click", yearFix);

function timeFix() {
  const date = new Date();
  const s = date.getSeconds();
  const m = date.getMinutes();
  const h = date.getHours();
  let refreshTime = setInterval(timeFix, 1000);
  timeBox.innerText = h + ":" + m + ":" + s;
  dateConteiner.style.display = "block";
  timeBox.style.display = "inline-flex";
}

hideButton.addEventListener("click", function () {
  dateConteiner.style.display = "none";
  yearBox.style.display = "none";
  mountBox.style.display = "none";
  dayBox.style.display = "none";
});

timeSubmit.addEventListener("click", timeFix);

showAll.addEventListener("click", function () {
  dateConteiner.style.display = "block";
  yearFix();
  dayFix();
  mountFix();
  timeFix();
});
