document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("search-btn");
  const searchInput = document.querySelector(".search");

  btn.addEventListener("click", function () {
    searchInput.classList.toggle("active");
  });
});
