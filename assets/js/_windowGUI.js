const WindowGUI = function WindowGUI(desktopGUI, iconGUI) {
  log.status('WindowGUI');
  
  
  
  
    let counter = 0;
  function test() {
    counter++;
    console.log(counter);
  }
  let evts = {
    type: 'click',
    event: test
  };
  
  function span() {
    return elementFactory('button', null, ['+'], evts);
  };
  
  return {
    open: span,
    update: null,
    destroy: null
  };
};
// const createExecutable = function createExecutable(icon) {
//   log.status('Creating Executable');
//   icon.addEventListener('dblclick', createWindow);
// };
// 
// const createWindow = function createWindow() {
//   log.status('Creating Window');
//   
//   const titlebar = elementFactory('div', {
//     class: 'titlebar'
//   }, createTitlebarIcons());
// 
//   console.log(titlebar); 
//   openWindow();
// };
// 
// const openWindow = function openWindow(icon) {
//   log.status('Opening Window');
// };
// 
// const createTitlebarIcons = function() {
//   const closeIcon = elementFactory('img', {
//     class: 'titlebar-icon',
//     src: '/images/icons/close.svg'
//   });
//   
//   const minimizeIcon = elementFactory('img', {
//     class: 'titlebar-icon',
//     src: '/images/icons/close.svg'
//   });
//   
//   const fullScreenIcon = elementFactory('img', {
//     class: 'titlebar-icon',
//     src: '/images/icons/close.svg'
//   });
//   
//   const container = elementFactory('div', {
//     class: 'titlebar-icons'
//   }, [closeIcon, minimizeIcon, fullScreenIcon]);
//   
//   return container;
// };


// const openWindow = function openWindow(icon) {
//   log.status('Opening Window');
//   icon.addEventListener('dblclick', createWindow);
// };

// const createWindow = function createWindow(container, icon) {
  // const url = icon.children[0].href;
  // const title = icon.children[0].title;
//   
//   function createCloseButton() {
//     const btn = document.createElement('')
//     const img = document.createElement('img');
//     const icon = '/images/close.svg';
//     img.src = icon;
//     return img;
//   };
//   
//   function createTitlebar() {
//     const titlebar = document.createElement('div');
//     const span = document.createElement('span');
//     const textNode = document.createTextNode(title);
//     
//     span.appendChild(textNode);
//     titlebar.appendChild(span);
//     titlebar.classList.add('titlebar');
//     
//     return titlebar;
//   };
//   
//   function createIframe() {
//     const iframe = document.createElement('iframe');
//     iframe.setAttribute('src', url);
//     return iframe;
//   };
//   
//   function createWindowGUI() {
//     const windowGUI = document.createElement('div');
//     windowGUI.classList.add('window');
//     return windowGUI;
//   };
//   
//   function openWindow() {
//     const wc = new DOMComponent('div');
//     wc.register();
//     // const wgui = createWindowGUI();
//     // const tb = createTitlebar();
//     // const ifr = createIframe();
//     // 
//     // wgui.appendChild(tb);
//     // wgui.appendChild(ifr);
//     // 
//     // container.appendChild(wgui);
//   };
//   icon.addEventListener('dblclick', openWindow);
// };
// 
// // const openWindow = function openWindow(container, icon) {
// //   const url = icon.children[0].href;
// //   function clickEvent(event) {
// //     const iframe = document.createElement('iframe');
// // 
// //     iframe.setAttribute('src', url);
// //     
// //     const windowContainer = windowContainer();
// //     
// //     windowContainer.appendChild(iframe);
// //     
// //     log.status('Opening window');
// //     
// //     container.appendChild(windowContainer);
// //   };
// //   icon.addEventListener('dblclick', clickEvent);
// // };
// // 
// // const addTitlebar = function addTitlebar(container) {
// //   console.log('titlebar');
// //   const titlebar = document.createElement('div');
// //   
// //   titlebar.classList.add('titlebar');
// //   container.appendChild(titlebar);
// //   // const p = document.createElement('p');
// //   // const textNode = document.createTextNode('asdas');
// //   // p.appendChild(textNode);
// //   // titlebar.appendChild(p);
// //   // titlebar.classList.add('titlebar');
// //   // frame.appendChild(titlebar);
// // };
// // 
// // const windowContainer = function windowContainer(frame) {
// //   const container = document.createElement('div');
// //   container.classList.add('window');
// //   addTitlebar(container);
// //   return container;
// // };