$(document).ready(function() {

  // function to hide all divs
  function hideAll() {
    $(".audio").hide();
    $(".first").hide();
  }

  // run that function right away
  hideAll();

  // when any animal is clicked, make the suitable div appear

  $(".photo").click(function() {

    // but first, hide all the divs to ensure that
    // only one will be open, ever
    hideAll();

    $("audio").each(function() {
        this.pause();
        this.currentTime = 0;
    });
    // here is a switch statement - this was in Codecademy
    // "Control Flow" lesson 7

    // we can get the ID of the thing that was clicked, HOW DO WE SHOW THE SWITCH FUNCTION A DIFFRENT LOCATION TO OPEN UNDER THE IMG ELEMENTS -

    switch ($(this).attr("id")) {
      case "TSLookphoto":
        $("#alook").show();
        $("#1first").show();
        break;
      case "TSNewphoto":
        $("#anew").show();
        $("#4first").show();
        break;
      case "TSMeanphoto":
        $("#amean").show();
        $("#3first").show();
        break;
      case "TSLovephoto":
        $("#alove").show();
        $("#2first").show();
        break;
    }
        $("#box").click(function(){
        $("#box").slideToggle();
          });
  }); // end of function for clicking
  });
