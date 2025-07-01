(function () {
  let lightSwitch = document.getElementById('unitSwitch');
  if (!unitSwitch) {
    return;
  }

  function metricMode() {
    document.body.classList.remove('og-imperial');
    document.body.classList.add('og-metric');
    // set light switch input to true
    if (!unitSwitch.checked) {
      unitSwitch.checked = true;
    }
    localStorage.setItem('unitSwitch', 'metric');
  }

  function imperialMode() {
    document.body.classList.remove('og-metric');
    document.body.classList.add('og-imperial');
    if (unitSwitch.checked) {
      unitSwitch.checked = false;
    }
    localStorage.setItem('unitSwitch', 'imperial');
  }

  function onToggleMode() {
    if (unitSwitch.checked) {
      metricMode();
    } else {
      imperialMode();
    }
  }

  unitSwitch.addEventListener('change', onToggleMode);
  onToggleMode();


})();
