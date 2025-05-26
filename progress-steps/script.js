document.addEventListener("DOMContentLoaded", () => { 
  const steps = document.querySelectorAll('.step');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const progress = document.getElementById('progress');

  let currentActive = 1;
  next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > steps.length) {
      currentActive = steps.length;
    }
    updateSteps();
  });
  prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
      currentActive = 1;
    }
    updateSteps();
  });

  function updateSteps() {
    steps.forEach((step, idx) => {
      //means if next is clicked
      if(idx < currentActive) {
        step.classList.add('active');
      }
      else {
        step.classList.remove('active');
      }
    })
    //styling of progress bar
    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (steps.length - 1)) * 100 + '%';

    //disable next button if last step is active
    if(currentActive === steps.length) {
      next.disabled = true;
    } else if( currentActive == 1) {
      prev.disabled = true;
    } else {
      next.disabled = false;
      prev.disabled = false;
    }
  }
});
