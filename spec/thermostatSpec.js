'use_strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('#initialize', function() {
    it('starts with a default temperature', function() {
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });

    it('power saving mode is on by default', function(){
      expect(thermostat.isPowerSavingModeOn).toBe(true);
    });
  });

  describe('#getCurrentTemperature', function(){
    it('returns current temperature', function(){
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });
  });

  describe('#switchPowerMode', function(){
    it('Changes state of power saving mode true/false', function() {
      thermostat.isPowerSavingModeOn = true;
      thermostat.switchPowerMode();
      expect(thermostat.isPowerSavingModeOn).toBe(false);
    });
    it('change temperature to max saving mode temp when switched on and previous temperature exceeded saving mode temp', function(){
      thermostat.isPowerSavingModeOn = false;
      thermostat.temperature = 30;
      thermostat.switchPowerMode();
      expect(thermostat.temperature).toEqual(thermostat.MAX_SAVING_MODE_TEMP);
    });

  });

  describe('#increaseTemperature', function() {
    it('increment temperature by 1 degree', function() {
      var temperature = thermostat.temperature;
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(temperature + 1);
    });

   describe('when power saving mode is on', function() {
     it('throw an error if maximum temperature is exceeded',function(){
      thermostat.temperature = thermostat.MAX_SAVING_MODE_TEMP;
      var msg = 'Unable to increase temperature because power saving mode is on';
      expect( function(){thermostat.increaseTemperature();}).toThrowError(msg);
     });
   });

   describe('when power saving mode is off', function() {
     it('throw an error if maximum temperature is exceeded',function(){
      thermostat.isPowerSavingModeOn = false;
      thermostat.temperature = thermostat.MAX_TEMPERATURE;
      var msg = 'Unable to increase temperature because maxmimum temperature reached';
      expect( function(){thermostat.increaseTemperature();}).toThrowError(msg);
     });
   });
  });

  describe('#decreaseTemperature', function() {
    it('decrease temperature by 1 degree', function() {
      var temperature = thermostat.temperature;
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(temperature - 1);
    });
    it('throw an error temperature is set to min', function() {
      thermostat.temperature = thermostat.MIN_TEMPERATURE;
      var msg = 'Unable to decrease temperature cause is already set to min';
      expect( function(){ thermostat.decreaseTemperature(); } ).toThrowError(msg);
    });
  });

  describe('#resetTemperature', function() {
    it('resets temperature to default temperature value',function(){
      thermostat.increaseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });
  });

  describe('#energyUsageStatus', function(){
    beforeEach(function() {
      thermostat.isPowerSavingModeOn = false;
    });

    it('returns low if temperature below energy usage low level', function(){
      thermostat.temperature = 17;
      expect(thermostat.energyUsageStatus()).toEqual('low');
    });
    it('returns medium if temperature below energy usage medium level', function(){
      thermostat.temperature = 18;
      expect(thermostat.energyUsageStatus()).toEqual('medium');
    });
    it('returns high if temperature above energy usage medium level', function(){
      thermostat.temperature = 25;
      expect(thermostat.energyUsageStatus()).toEqual('high');
    });

  });

});
