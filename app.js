const container = document.querySelector(".container");
const btn = document.querySelector(".green-bg button");

btn.addEventListener("click", () => {
  container.classList.toggle("change");
});
