$(document).ready(function() {
  $("form").submit(function(event) {
    var warningSignResponses = [];
    $("input:checkbox[name=warning-sign]:checked").each(function() {
      var warningSignInput = $(this).val();
      warningSignResponses.push(warningSignInput);
    });
    var healthSymptomsResponses = [];
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      var healthSymptomsInput = $(this).val();
      healthSymptomsResponses.push(healthSymptomsInput);
    });
    var copingMethodResponses = [];
    $("input:checkbox[name=coping-methods]:checked").each(function() {
      var copingMethodInput = $(this).val();
      copingMethodResponses.push(copingMethodInput);
    });

    var stressPoints = 0;

    for (var i = 0; i < warningSignResponses.length; i ++) {
      stressPoints ++;
    }

    for (var i = 0; i < healthSymptomsResponses.length; i ++) {
      stressPoints ++;
    }

    for (var i = 0; i < copingMethodResponses.length; i ++) {
      stressPoints -= 1;
    }

    console.log(stressPoints);

    if (warningSignResponses.length > 0 || healthSymptomsResponses.length > 0 || copingMethodResponses > 0) {
      if (stressPoints <= 4) {
        $("#low-stress").show();
      } else if (stressPoints < 7) {
        $("#moderate-stress").show();
      } else {
        $("#high-stress").show();
      }
    } else {
      alert("Nothing is checked. Are you sure?");
    }

    event.preventDefault();
  });
});
