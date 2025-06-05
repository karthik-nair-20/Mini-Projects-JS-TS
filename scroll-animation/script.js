document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".box");

document.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check to show boxes if they are already in view
  function handleScroll() {
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if(boxTop < triggerBottom) {
        box.classList.add("show");
      }
      else {
        box.classList.remove("show");
      }
    })
  }

 });
