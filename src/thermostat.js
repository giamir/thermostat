'use_strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MIN_TEMPERATURE = 10;
  this.MAX_SAVING_MODE_TEMP = 25;
  this.MAX_TEMPERATURE = 32;
  this.ERROR_MSG = '';
  this.ENERGY_USAGE_LOW_TEMP = 18;
  this.ENERGY_USAGE_MED_TEMP = 25;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.isPowerSavingModeOn = true;
}

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function() {
  if(this._isMaxTemperature()) throw new TypeError(this.ERROR_MSG);
  this.temperature++;
};

Thermostat.prototype.decreaseTemperature = function() {
  if(this._isMinTemperature()) throw new TypeError(this.ERROR_MSG);
  this.temperature--;
};

Thermostat.prototype.switchPowerMode = function () {
  if(this._isTempNeedAdjustment()){this.temperature = this.MAX_SAVING_MODE_TEMP;}
  this.isPowerSavingModeOn = !this.isPowerSavingModeOn;
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsageStatus = function () {
  if(this.temperature < this.ENERGY_USAGE_LOW_TEMP){return 'low';}
  if(this.temperature < this.ENERGY_USAGE_MED_TEMP){return 'medium';}
  return 'high';
};

Thermostat.prototype._isMinTemperature = function() {
  this.ERROR_MSG = 'Unable to decrease temperature cause is already set to min';
  return this.temperature <= this.MIN_TEMPERATURE;
};

Thermostat.prototype._isMaxTemperature = function () {
  if(this.isPowerSavingModeOn){
    this.ERROR_MSG = 'Unable to increase temperature because power saving mode is on';
    return this.temperature >= this.MAX_SAVING_MODE_TEMP;

  }
  else {
    this.ERROR_MSG = 'Unable to increase temperature because maxmimum temperature reached';
    return this.temperature >= this.MAX_TEMPERATURE;
  }
  return false;
};

Thermostat.prototype._isTempNeedAdjustment = function () {
  return this.isPowerSavingModeOn === false && this.temperature > this.MAX_SAVING_MODE_TEMP;
};
