const h1 = document.querySelector("h1");
const text = "Hello World ! ";
let i = 0;

const typing = setInterval(() => {
  if (i < text.length) {
    h1.innerHTML += text.charAt(i);
    i++;
  } else {
    clearInterval(typing);
  }
}, 100);