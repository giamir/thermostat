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

  describe('#increaseTemperature', function() {
    it('increment temperature by 1 degree', function() {
      var temperature = thermostat.temperature;
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(temperature + 1);
    });
  });

});
