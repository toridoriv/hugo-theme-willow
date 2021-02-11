const App = ((doc) => {
  
  // Return Element
  const createElement = name => doc.createElement(name);
  const appendElement = child => target => target.appendChild(child);
  const getElement = selector => doc.querySelector(selector);
  const getTarget = event => event.target;
  const getTargetClosest = selector => event => event.target.closest(selector);
  const addAttribute = target => (attrName, attrVal) => {
    target[attrName] = attrVal;
    return target;
  };
  
  // Return Event
  const addListener = eventName => action => target => {
    target.addEventListener(eventName, event => {
      if (isDefined(event)) {
        return action(event);
      };
    });
  };
  
  const preventDefault = event => {
    event.preventDefault();
    return event;
  };
  
  const stopPropagation = event => {
    event.stopPropagation();
    return event;
  };
  
  // Return Function
  const preventDefaultClick = addListener('click')(event => preventDefault(event));
  
  const pipe = (...functions) => value => functions.reduce((currentValue,
    currentFunction) => {
      return currentFunction(currentValue);
    }, value);
  
  // Return Boolean
  const isFunction = (fn) => typeof fn === 'function';
  const isDefined = (param) => param !== undefined;
  
  // Specifics
  const navbar = getElement('#navigation');
  const getLink = getTargetClosest('a');
  const addFrameSrc = addListener('click')(event => {
    const url = getLink(event).href;
    const frame = createElement('iframe');
    addAttribute(frame)('src', url);
    appendElement(frame)(getElement('body'));
    return frame;
  });
  
  // Debug
  const tap = fn => x => { fn(x); return x; };
  
  if(navbar) {
    pipe(preventDefaultClick)(navbar);
    pipe(addFrameSrc)(navbar);
  };
});

document.addEventListener('DOMContentLoaded', () => {
  App(document);
});
