var DEFAULT_TEMPERATURE = 20;
var MIN_TEMPERATURE = 10;

function Thermostat() {
  this.temperature = DEFAULT_TEMPERATURE;
}

Thermostat.prototype.increaseTemperature = function() {
  this.temperature++;
};

Thermostat.prototype.decreaseTemperature = function() {
  if(this._isMinTemperature()) throw new TypeError('Unable to decrease temperature cause is already set to min');
  this.temperature--;
};

Thermostat.prototype._isMinTemperature = function() {
  return this.temperature <= MIN_TEMPERATURE;
};
