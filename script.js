
const typeWriter = document.querySelector(".typewriter");
const words = ["Python Developer", "Web Developer", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
let currentWord = words[index];

function typeEffect() {
  if (charIndex < currentWord.length) {
    typeWriter.innerHTML += currentWord[charIndex];
    charIndex++;
    setTimeout(typeEffect, 150);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typeWriter.innerHTML = currentWord.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 100);
  } else {
    index = (index + 1) % words.length;
    currentWord = words[index];
    setTimeout(typeEffect, 500);
  }
}

window.onload = typeEffect;
