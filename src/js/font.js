const dropdownItem = document.querySelectorAll("#dropdown--item");
const dropdownTitle = document.querySelector(".dropdown--title");

const fontLocal = localStorage.getItem("font");
let text;

if (fontLocal == "sansSerif") {
  document.body.classList.add("loro");
  text = "font:1";
  dropdownTitle.textContent = text;
} else if (fontLocal == "serif") {
  document.body.classList.add("inter");
  text = "font:2";
  dropdownTitle.textContent = text;
} else if (fontLocal == "monospace") {
  document.body.classList.add("mono");
  text = "font:3";
  dropdownTitle.textContent = text;
}

dropdownItem.forEach((li, i) => {
  li.addEventListener("click", () => {
    text = li.textContent;
    dropdownTitle.textContent = text;
    if (i === 0) {
      document.body.classList.add("loro");
      localStorage.setItem("font", "sansSerif");
    } else if (i === 1) {
      document.body.classList.add("inter");
      localStorage.setItem("font", "serif");
    } else if (i === 2) {
      document.body.classList.add("mono")
      localStorage.setItem("font", "monospace");
    }
  });
});