const selectField = document.getElementById("selectField");
const selectText = document.getElementById("selectText");
const options = document.getElementsByClassName("options");
const list = document.getElementById("list");
const arrowicon = document.getElementById("arrowicon");

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowicon.classList.toggle("rotate");
  };
}

selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowicon.classList.toggle("rotate");
};
