let newText = document.querySelector("#text");

newText.onclick = function () {
  newText.innerHTML = "done";
  newText.className = "done";
  newText.style.color = "#f00";
  newText.style.fontSize = "30px";
};
