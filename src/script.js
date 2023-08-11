const rating = document.querySelector(".main__numbers li");
const button = document.querySelector(".main__btn");
const thankSection = document.querySelector(".main__thanks");
const ratingSection = document.querySelector(".main__survey");
const ratedNumber = document.getElementById(".main__rated");
let selected = null;

rating.forEach((ratingNumbers) => {
  ratingNumbers.addEventListener("click", (e) => {
    const colorFocus = document.querySelector(".main__focus");
    if (colorFocus) {
      rating.classList.remove("main__focus");
    }
    const select = e.target;
    select.classList.add("main__focus");
    selected = e.target.innerText;
  });
});

button.addEventListener("submit", () => {
  if (selected) {
    selected = ratedNumber.innerText;
    ratingSection.classList.add("main__hidden");
    thankSection.classList.remove("main__hidden");
  }
});
