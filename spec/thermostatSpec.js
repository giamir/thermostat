describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('#initialize', function() {
    it('starts with a default temperature', function() {
      expect(thermostat.temperature).toEqual(DEFAULT_TEMPERATURE);
    });
  });

});
