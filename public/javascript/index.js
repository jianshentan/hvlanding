$(document).ready(function() {
  $('body').mousemove(function(event) {
    // coords (event.pageX, event.pageY)
    $(".hv-cursor").offset({ top: event.pageY - 40, left: event.pageX - 80});
  });
  
  $('body').keydown(function(e) {
    var overlay = $(".hv-overlay");
    var page = $(".hv-page");
    if(e.keyCode == 37) { // left
    
      overlay.addClass('blue');
      overlay.css("left", "100vw");
      overlay.show();
      overlay.animate({ "left": "0px" });
      page.animate({ "left": "-100vw"}, function() {
        window.location.href = "http://lab.hellovelocity.com";
      });
      
    } else if(e.keyCode == 39) { // right
      
      overlay.addClass('white');
      overlay.css("left", "-100vw");
      overlay.show();
      overlay.animate({ "left": "0px" });
      page.animate({ "left": "100vw"}, function() {
        window.location.href = "http://startups.hellovelocity.com";
      });
      
    }
  });
});