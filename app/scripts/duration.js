function duration(milliseconds) {
  let format = (time) => {
    if (time < 10) {
      return '0' + time;
    }
    return '' + time;
  };

  let seconds = Math.floor(milliseconds / 1000) % 60;
  let minutes = Math.floor(milliseconds / 1000 / 60);
  return format(minutes) + ':' + format(seconds);
}
