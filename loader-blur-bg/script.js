  const loader = document.querySelector(".loader");
  const bgImage = document.querySelector(".bg");

  // i need to remove blur
  // i need to add count
  let count = 0;
  let int = setInterval(blurring, 20);
  function blurring() {
    count++;
    if(count > 99) {
      clearInterval(int);
    }
    loader.innerHTML = `${count}%`;
    loader.style.opacity = scale(count, 0, 100, 1, 0);
    //bgImage.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
  }
// map a number from one range to another
  const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
