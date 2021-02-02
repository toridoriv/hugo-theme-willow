/**
* Create a functional GUI like icon
* @function
* @param { HTMLElement } iconElement
*/
const createIconGUI = function(iconElement) {
  log.status('createIconGUI');
  
  this.element = iconElement;
  this.id, iconElement.id = iconElement.children[0].title;
  this.initialPositionX = iconElement.getBoundingClientRect().left;
  this.initialPositionY = iconElement.getBoundingClientRect().top;
  this.url = iconElement.children[0].href;
  
  function makeDraggable() {
    
  }
  
  // iconElement.id = title;
  // 
  // // const icons = document.querySelectorAll('.icon');
  // // 
  // // function addEventDrag() {
  // //   icons.forEach(function(icon) {
  // //     makeDraggable(icon);
  // //   });
  // // };
  // function constructor(id, initialPositionX, initialPositionY, url) {
  //   this.id = id;
  //   this.initialPositionX = initialPositionX;
  //   this.initialPositionY = initialPositionY;
  //   this.url = url;
  //   //this.title = title;
  // };
  // 
  // function initState() {
  //   const icon = new constructor(title, initialPositionX, initialPositionY, url);
  //   
  //   saveState(icon);
  // };
  // 
  // function getState() {
  //   const icon = localStorage.getItem(iconElement.id);
  //   return icon;
  // };
  // 
  // function addEventOpenWindow() {
  //   
  // };
  // return {
  //   init: initState,
  //   get: getState
  // }
};