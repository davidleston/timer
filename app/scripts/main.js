function main(window) {
  // HTML element IDs are reference in strings so that minification will process them correctly
  let form = window['formElement'];
  let progressBar = window['progressElement'];
  let elapsedElement = window['elapsedElement'];
  let remainingElement = window['remainingElement'];
  let minutesInput = window['minutesInput'];
  let submitButton = window['submitButton'];
  let setInterval = window.setInterval;
  let clearInterval = window.clearInterval;
  let millis = () => new window.Date().getTime();
  let localStorage = window.localStorage;

  let storageKey = 'mins';
  var interval;
  var storedMins = parseInt(localStorage.getItem(storageKey), 10);
  minutesInput.value = isNaN(storedMins) ? 1 : storedMins;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem(storageKey, minutesInput.value);
    let target = minutesInput.valueAsNumber * 60 * 1000;
    var up;
    var pauseTime;
    clearInterval(interval);
    let start = () => interval = setInterval(tick, 100);

    // start the first tick as close to the start of the timer as possible,
    // improves the first second of the animation
    var startTime = millis();
    let tick = () => {
      let currentTime = millis();
      up = currentTime - startTime;
      if (up >= target) {
        up = target;
        clearInterval(interval);
        interval = null;
        elapsedElement.removeEventListener('click', toggle);
        remainingElement.removeEventListener('click', toggle);
      }
      progressBar.style.height = (target - up) / target * 100 + '%';
      elapsedElement.innerHTML = duration(up);
      remainingElement.innerHTML = duration(target - up + 999);
    };

    let toggle = () => {
      if (interval) {
        clearInterval(interval);
        pauseTime = millis();
        interval = null;
      } else {
        let currentTime = millis();
        let offset = currentTime - pauseTime;
        startTime += offset;
        start();
      }
    };
    tick();
    start();
    elapsedElement.addEventListener('click', toggle);
    remainingElement.addEventListener('click', toggle);
  });

  minutesInput.addEventListener('input', () => {
    form.classList.remove('has-error');
    submitButton.disabled = false;
    minutesInput.checkValidity();
  });
  minutesInput.addEventListener('invalid', () => {
    form.classList.add('has-error');
    submitButton.disabled = true;
  });
}
