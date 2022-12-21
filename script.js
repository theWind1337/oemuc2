const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');

const offset = 50;

menBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
});

window.addEventListener("scroll", () => {
  if (pageYOffset > offset) {
    navbar.classList.add('navbar-active');
  } else {
    navbar.classList.remove('navbar-active');
  }
});

const body = document.querySelector("body");
const textBox = document.querySelector(".textBox");
const textBox1 = document.querySelector(".textBox1");
const textBox2 = document.querySelector(".textBox2");
const textBox3 = document.querySelector(".textBox3");
const textDual = document.querySelector(".text-dual");
const textUci = document.querySelector(".text-uci");
const textSv = document.querySelector(".text-sv");
const textOemuc = document.querySelector(".text-oemuc");


let i = 0;
let j = 0;
let k = 0;
let counter = 2;
let htmlArr = [];

function displayText() {
  if (i < text1.length && counter == 0) {
    textBox1.innerHTML += text1.charAt(i);
    i++;
    setTimeout(displayText, 200);
  } else if (j < text2.length && counter == 0) {
    textBox2.innerHTML += text2.charAt(j);
    j++;
    setTimeout(displayText, 200);
  } else if (k < text3.length && counter == 0) {
    textBox3.innerHTML += text3.charAt(k);
    k++;
    setTimeout(displayText, 200);
  } else if (counter > 0) {
    counter--;
    setTimeout(displayText, 1000);
  } else {
    textDual.classList.add("show1");
    textUci.classList.add("show2");
    textSv.classList.add("show4");
    textOemuc.classList.add("show3");
  }
}

window.addEventListener("load", displayText);

let x = 0,
  bool = false,
  interval;

const rotate = () => {
  const cubes = document.querySelectorAll(".cube");

  Array.from(cubes).forEach(
    (cube) => (cube.style.transform = `rotateY(${x}deg)`)
  );
};

const changePlayPause = () => {
  const i = document.querySelector(".play-pause i");
  const cls = i.classList[1];
  if (cls === "fa-play") {
    i.classList.remove("fa-play");
    i.classList.add("fa-pause");
  } else {
    i.classList.remove("fa-pause");
    i.classList.add("fa-play");
  }
};

const playPause = () => {
  if (!bool) {
    interval = setInterval(() => {
      x -= 90;
      rotate();
    }, 3000);
    changePlayPause();
    bool = true;
  } else {
    clearInterval(interval);
    changePlayPause();
    bool = false;
  }
};

document.querySelector(".left-arrow").addEventListener("click", () => {
  x += 90;
  rotate();
  if (bool) {
    playPause();
  }
});

document.querySelector(".left-arrow").addEventListener("mouseover", () => {
  x += 25;
  rotate();
});

document.querySelector(".left-arrow").addEventListener("mouseout", () => {
  x -= 25;
  rotate();
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  x -= 90;
  rotate();
  if (bool) {
    playPause();
  }
});

document.querySelector(".right-arrow").addEventListener("mouseover", () => {
  x -= 25;
  rotate();
});

document.querySelector(".right-arrow").addEventListener("mouseout", () => {
  x += 25;
  rotate();
});

document.querySelector(".play-pause").addEventListener("click", () => {
  playPause();
});
