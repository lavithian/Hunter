const titleText = document.querySelector('.title-text');
const skills = document.querySelector('.experience-text');

function fadeIn(element, duration) {
  element.style.opacity = 0;
  let startTime = null;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    element.style.opacity = progress;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

function slideInFromLeft(element, duration) {
  element.style.transform = 'translateX(-100%)';
  element.style.opacity = 1;
  let startTime = null;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Calculate the new position based on the progress
    const newPosition = -100 + progress * 100;

    element.style.transform = `translateX(${newPosition}%)`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

console.log(titleText);
titleText.style.opacity = 0;
fadeIn(titleText, 3000);
slideInFromLeft(skills, 1000);
