const typingBar = document.querySelector(".typing-bar");

const expand = setInterval(() => {
  if (typingBar.style.width === "100%") {
    clearInterval(expand);
  } else {
    typingBar.style.width = `${i / text.length * 100}%`;
  }
}, 100);