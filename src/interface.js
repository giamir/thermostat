$(document).ready(function() {

  var coords;
  var weather;
  var url_image;

  var thermostat = new Thermostat();
  var currentEnergyUsageStatus;

  refreshWeather();
  refreshTemperature();
  refreshEnergyUsageStatus();
  refreshPowerSavingStatus();

  $(document).click(function() {
    refreshTemperature();
    refreshEnergyUsageStatus();
    refreshPowerSavingStatus();
    refreshAvailableActions();
   });

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

  function refreshEnergyUsageStatus() {
    if(currentEnergyUsageStatus !== thermostat.energyUsageStatus()) {
      if(currentEnergyUsageStatus === undefined) {
        currentEnergyUsageStatus = thermostat.energyUsageStatus();
      }
      $("#next-background").attr('src','./images/' + thermostat.energyUsageStatus() + '.png');
      $("#current-background").attr('src','./images/' + currentEnergyUsageStatus + '.png');
      $("#current-background").fadeOut(300, function() {
        $("#current-background").attr('src','./images/' + thermostat.energyUsageStatus() + '.png');
        $("#current-background").css('display','block');
      });
      currentEnergyUsageStatus = thermostat.energyUsageStatus();
    }
  }

  function refreshTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
  }
  function refreshPowerSavingStatus() {
    if(thermostat.isPowerSavingModeOn) {
      $('#powersaving-status').fadeIn('fast');
    } else {
      $('#powersaving-status').fadeOut('fast');
    }
  }
  function refreshAvailableActions() {
    if (thermostat._isMaxTemperature()) {
      $('#temperature-increase').css('display', 'none');
    } else {
      $('#temperature-increase').css('display', 'block');
    }
    if (thermostat._isMinTemperature()) {
      $('#temperature-decrease').css('display', 'none');
    } else {
      $('#temperature-decrease').css('display', 'block');
    }
  }

 });
