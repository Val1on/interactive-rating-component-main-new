const rating = document.querySelector(".main__numbers li");

// rating.forEach(ratingNumbers => {
//     ratingNumbers
// });

function ratingNumbers() {
  rating.forEach();
  ratingNumbers.addEventListener("click", e());

  function e() {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const card = e.target;
    card.classList.add("checked");
    rate = e.target.innerText;
    console.log(rate);
  }
}
