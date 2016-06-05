(function () {
  'use strict';

  describe('duration formatter', function () {
    it('adds leading zeros when formatting zero', function () {
      expect(duration(0)).to.equal('00:00');
    });

    it('adds leading zeros when formatting non-zero but less than 10', function () {
      expect(duration(61 * 1000)).to.equal('01:01');
    });

    it('displays more than two digits of minutes', function () {
      expect(duration(100 * 60 * 1000)).to.equal('100:00');
    });
  });
})();
