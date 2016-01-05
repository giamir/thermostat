var DEFAULT_TEMPERATURE = 20;

function Thermostat() {
  this.temperature = DEFAULT_TEMPERATURE;
}

Thermostat.prototype.increaseTemperature = function() {
  this.temperature++;
};
