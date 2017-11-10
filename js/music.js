$(document).ready(function() {


function hidealbumcovers() {
    $('#albumcovers').hide();
}
  function hideAll() {
    $('#dont').hide();
    $('#god').hide();
    $('#tambourine').hide(); $
    $('#rolling').hide();
  }

  hidealbumcovers();
  hideAll();

$('#click').click(function() {
  $('#albumcovers').slideToggle();
 });

$('.albumcover').click(function() {

  hideAll();

  $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
  });

     switch ($(this).attr("id")) {
       case "freewheelin":
         $('#dont').show();
         break;
       case "thesetimes":
         $('#god').show();
         break;
       case "bringing":
         $('#tambourine').show();
         break;
       case "highway61":
         $('#rolling').show();
         break;
     }

   });


 });
