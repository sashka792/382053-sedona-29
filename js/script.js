const buttonSearch = document.querySelector(".registration-button");
const form = document.querySelector(".registration-form");

const dateIn = form.querySelector("[name=check-in]");
const dateOut = form.querySelector("[name=check-out]");
const adultsNum = form.querySelector("[name=adults]");
const childrenNum = form.querySelector("[name=children]");
const findButton = form.querySelector(".registration-form_find");

let isStorageSupport = true;
let adultsStorage = "";
let childrenStorage = "";

try {
  adultsStorage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false; 
}

try {
  childrenStorage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false; 
}

// buttonSearch.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   form.classList.toggle("d-none");
// }); 

buttonSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (form.classList.contains("registration-form")){
    form.classList.remove("registration-form");
    form.classList.remove("d-block");
    form.classList.remove("error");
    form.classList.add("d-none");
  } else {
    form.classList.remove("d-none");
    form.classList.add("registration-form");
    form.classList.add("d-block");
    dateIn.focus();
  }
}); 

findButton.addEventListener("click", function (evt){
    if (!adultsNum.value || !childrenNum.value) {
        evt.preventDefault();
        form.classList.remove("error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("error");
    } else {
      if (isStorageSupport){
        localStorage.setItem("adults", adultsNum.value)
        localStorage.setItem("children", childrenNum.value)
      }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (form.classList.contains("registration-form")) {
      evt.preventDefault();
      form.classList.remove("registration-form");
      form.classList.remove("error");
      form.classList.add("d-none");
    }
  }
});