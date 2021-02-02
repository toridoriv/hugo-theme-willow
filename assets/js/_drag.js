const drag = function() {
  const add = (a, b) => a + b;
  return {
    add
  };
}();

const makeDraggable = function(element) {
  let shiftX;
  let shiftY;
  
  icon.addEventListener('click', function(event) {
    event.preventDefault();
  });
  
  function dragStart(event) {
    shiftX = event.clientX - element.getBoundingClientRect().left;
    shiftY = event.clientY - element.getBoundingClientRect().top;
    element.classList.add('is-dragged');
    document.addEventListener('mousemove', drag);
  };
  
  function drag(event) {
    element.style.left = event.clientX - shiftX  + 'px';
    element.style.top = event.clientY - shiftY + 'px';
    
    element.ondragstart = function() {
      return false;
    };
  };
  
  function dragEnd(event) {
    element.classList.remove('is-dragged');
    document.removeEventListener('mousemove', drag);
  };
  
  icon.addEventListener('mousedown', dragStart);
  icon.addEventListener('mouseup', dragEnd);
};