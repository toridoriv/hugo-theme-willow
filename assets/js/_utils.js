const log = {
  check: function(message) {
    console.log('%c' + message + '...', 'color: #2b2e3b;');
  },
  json: function(message) {
    JSON.stringify(message);
  },
  obj: function(obj) {
    console.dir(obj, 'background-color: red;');
  },
  status: function(message) {
    console.log('%c Starting ' + message + '...', 'color: #ff80ca;');
  },
};

const elementFactory = function elementFactory(type,
  attributes = {},
  children = [], events = [] ) {
  const element = document.createElement(type);
  
  for (const attr in attributes) {
    element.setAttribute(attr, attributes[attr]);
  };
  
  if (children instanceof HTMLElement) {
    children = [children];
  };
  
  if (!Array.isArray(events)) {
    events = [events];
  };
  
  for (let i = 0,  size = children.length; i < size; i++) {
    if (typeof children[i] === 'string') {
      element.appendChild(document.createTextNode(children[i]));
    } else {
      element.appendChild(children[i]);
    };
  };
  
  for (let i = 0,  size = events.length; i < size; i++) {
    element.addEventListener(events[i].type, events[i].event);
  };
  
  // for (const child in children) {
  //   element.appendChild(child);
  // };
  // 
  console.log(events);
  return element;
};

const appendToPage = function appendToPage(element) {
  document.appendChild(element);
};

/**
* Open a new db in the window
* @function
*/
const initiateDatabase = function initiateDatabase() {
  if (!('indexedDB' in window)) {
    console.warn('indexedDB not supported');
    return;
  }
  // //window.localStorage.setItem(element.id, JSON.stringify(element));
  // const request = window.indexedDB.open('WillowStore', 1);
  // 
  // request.onerror = function(event) {
  //   console.log(event, request);
  // };
  // 
  // request.onsuccess = function(event) {
  //   console.log(event, request);
  // };
};