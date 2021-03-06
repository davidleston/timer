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
  let click = 'click';
  let hasError = 'has-error';
  var interval;
  var toggle = () => {};
  var storedMins = parseInt(localStorage.getItem(storageKey), 10);

  minutesInput.value = isNaN(storedMins) ? 1 : storedMins;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.setItem(storageKey, minutesInput.value);
    let target = minutesInput.valueAsNumber * 60 * 1000;
    var up;
    var pauseTime;
    clearInterval(interval);

    // start the first tick as close to the start of the timer as possible,
    // improves the first second of the animation
    var startTime = millis();
    let tick = () => {
      let currentTime = millis();
      up = currentTime - startTime;
      if (up >= target) {
        up = target;
        clearInterval(interval);
      }
      progressBar.style.height = (target - up) / target * 100 + '%';
      elapsedElement.innerHTML = duration(up);
      remainingElement.innerHTML = duration(target - up + 999);
    };

    let start = () => {
      tick();
      interval = setInterval(tick, 100);
    };

    toggle = () => {
      if (pauseTime) {
        let currentTime = millis();
        let offset = currentTime - pauseTime;
        startTime += offset;
        pauseTime = 0;
        start();
      } else {
        clearInterval(interval);
        pauseTime = millis();
      }
    };
    start();
  });

  let toggleEventListener = () => {
    toggle();
  };
  elapsedElement.addEventListener(click, toggleEventListener);
  remainingElement.addEventListener(click, toggleEventListener);

  minutesInput.addEventListener('input', () => {
    form.classList.remove(hasError);
    submitButton.disabled = false;
    minutesInput.checkValidity();
  });
  minutesInput.addEventListener('invalid', () => {
    form.classList.add(hasError);
    submitButton.disabled = true;
  });
}
