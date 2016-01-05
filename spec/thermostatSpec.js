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

  describe('#decreaseTemperature', function() {
    it('decrease temperature by 1 degree', function() {
      var temperature = thermostat.temperature;
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(temperature - 1);
    });
    it('throw an error temperature is set to min', function() {
      thermostat.temperature = MIN_TEMPERATURE;
      var msg = 'Unable to decrease temperature cause is already set to min';
      expect( function(){ thermostat.decreaseTemperature(); } ).toThrowError(msg);
    });
  });

});
