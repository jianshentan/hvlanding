$(document).ready(function() {
  $('body').mousemove(function(event) {
    // coords (event.pageX, event.pageY)
    $(".hv-cursor").show();
    $(".hv-cursor").offset({ top: event.pageY - 40, left: event.pageX - 80});
  });
  
  var overlay = $(".hv-overlay");
  var page = $(".hv-page");
  
  // arrow keys
  $('body').keydown(function(e) {
    if(e.keyCode == 37) { // left
      overlay.addClass('blue');
      overlay.css("left", "-100vw");
      overlay.show();
      overlay.animate({ "left": "0px" });
      page.animate({ "left": "100vw"}, function() {
        window.location.href = "http://lab.hellovelocity.com";
      });
      
      ga('send', {
        hitType: 'event',
        eventCategory: 'slide',
        eventAction: 'slide left (LAB)',
        eventLabel: 'HV Lab'
      });
    } else if(e.keyCode == 39) { // right
      overlay.addClass('white');
      overlay.css("left", "100vw");
      overlay.show();
      overlay.animate({ "left": "0px" });
      page.animate({ "left": "-100vw"}, function() {
        window.location.href = "http://design.hellovelocity.com";
      });
       
      ga('send', {
        hitType: 'event',
        eventCategory: 'slide',
        eventAction: 'slide right (DESIGN)',
        eventLabel: 'HV DESIGN'
      });
    }
  });
  
  // clicked on links
  $("#lab-link").click(function() {
    window.location.href = "http://lab.hellovelocity.com";
    ga('send', {
      hitType: 'event',
      eventCategory: 'click',
      eventAction: 'slide left (LAB)',
      eventLabel: 'HV Lab'
    });
  });
  
  $("#design-link").click(function() {
    window.location.href = "http://design.hellovelocity.com";
    ga('send', {
      hitType: 'event',
      eventCategory: 'click',
      eventAction: 'slide right (DESIGN)',
      eventLabel: 'HV DESIGN'
    });
  });
  
});
