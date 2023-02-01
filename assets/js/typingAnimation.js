const h1 = document.querySelector("h1");
const text = "Hello World!";
let i = 0;
let cursor = "_";

const typing = setInterval(() => {
  if (i < text.length) {
    h1.innerHTML = text.slice(0, i) + cursor;
    i++;
    setTimeout(typing, Math.random() * 100 + 50);
  } else {
    clearInterval(typing);
    h1.innerHTML = text;
  }

  cursor = cursor === "_" ? "" : "_";
}, 100);
