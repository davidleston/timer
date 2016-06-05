function main(window) {
  let form = window.f;
  let progressBar = window.p;
  let elapsedElement = window.e;
  let remainingElement = window.r;
  let minutesInput = window.m;
  let submitButton = window.s;
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
    var up = 0;
    clearInterval(interval);
    // start the first tick as close to the start of the timer as possible,
    // improves the first second of the animation
    let startTime = millis();
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
    tick();
    interval = setInterval(tick, 200);
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
