const Willow = (function($) {
  log.status('Starting Willow');
  
  const desktop = $.getElementById('desktop');
  const icons = $.querySelectorAll('.icon');
  
  if (desktop !== null) {
    $.addEventListener('DOMContentLoaded', function(event) {
      log.status('Starting DOM Event Listener');
      icons.forEach(function(icon) {
        icon = new createIconGUI(icon);
        log.obj(icon);
        //console.dir(icon);
        //icon.methods.makeDraggable();
        //saveState();
      });
      // console.log(icons[0].get())
    });    
  };
  
})(document);