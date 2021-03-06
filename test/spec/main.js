(function () {
  'use strict';

  describe('main', function () {
    it('cancels a countdown currently in progress', function () {
      let noop = function () {};
      var start;
      var tick;
      var lastTime = new Date().getTime();
      let window = {
        formElement: {
          addEventListener: function (eventName, callback) {
            start = function () {
              callback({
                preventDefault: noop
              });
            };
          }
        },
        progressElement: {
          style: {}
        },
        elapsedElement: {
          addEventListener: noop
        },
        remainingElement: {
          addEventListener: noop
        },
        minutesInput: {
          addEventListener: noop
        },
        setInterval: function (callback) {
          tick = callback;
        },
        clearInterval: noop,
        Date: function () {
          return {
            getTime: function () {
              return lastTime;
            }
          };
        },
        duration: duration,
        localStorage: {
          getItem: noop,
          setItem: noop
        }
      };
      new main(window);
      start();
      expect(window.elapsedElement.innerHTML).to.equal('00:00');
      lastTime = lastTime + 1000;
      tick();
      expect(window.elapsedElement.innerHTML).to.not.equal('00:00');
      start();
      expect(window.elapsedElement.innerHTML).to.equal('00:00');
    });
  });
})();
