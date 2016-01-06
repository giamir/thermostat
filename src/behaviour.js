var thermostat = new Thermostat();

function refreshTemperature() {
  $('#temperature').text(thermostat.getCurrentTemperature());
  $('#temperature').attr('class', thermostat.energyUsageStatus());
}
function refreshPowerSavingStatus() {
  var powerSavingStatus = 'off';
  if(thermostat.isPowerSavingModeOn) powerSavingStatus = 'on';
  $('#power-saving-status').text(powerSavingStatus);
}
function printNotice() {
  $('#notice').text(thermostat.ERROR_MSG);
}

$(document).click(function() {
  refreshTemperature();
  refreshPowerSavingStatus();
  printNotice();
 });

$(document).ready(function() {

  refreshTemperature();
  refreshPowerSavingStatus();

  $('#temperature-increase').click(function() {
    try{thermostat.increaseTemperature();}
    catch(err) {}
  });

  $('#temperature-decrease').click(function() {
    try{thermostat.decreaseTemperature();}
    catch(err) {}
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
  });

  $('#powersaving-switch').click(function() {
    thermostat.switchPowerMode();
  });

 });
