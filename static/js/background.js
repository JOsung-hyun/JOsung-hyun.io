const images = ["back1.jpeg", "back2.jpeg", "back3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `../JOsung-hyun.github.io/MOMENTUM/img/${chosenImage}`;

document.body.appendChild(bgImage)