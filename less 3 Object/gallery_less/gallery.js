let btn_prev = document.querySelector(".prev");
let btn_next = document.querySelector(".next");
let images = document.querySelectorAll(".gallery img");
let i = 0;
console.log(images);

btn_prev.onclick = function () {
  images[i].className = "";
  i--;

  if (i < 0) {
    i = images.length - 1;
  }
  images[i].className = "show";
  console.log(i);
};

btn_next.onclick = function () {
  images[i].className = "";
  i++;

  if (i >= images.length) {
    i = 0;
  }
  images[i].className = "show";
  console.log(i);
};
