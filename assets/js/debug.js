console.log('💖');

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function createColorVariant(colorArr, variant) {
  const newColorArr = [];
  colorArr.forEach(function(color) {
    newColorArr.push(`${color}-${variant}`);
  });
  return newColorArr;
};

function createTableHeaders(headers, parentElement) {
  headers.forEach(function(header) {
    const th = document.createElement('th');
    const text = document.createTextNode(header);
    th.appendChild(text);
    parentElement.appendChild(th);
  });
};

function orderColorList(mainColors, tintList, baseList, shadeList) {
  const colorObj = new Object;
  for(let i = 0; i < mainColors.length; i++) {
    colorObj[mainColors[i]] = [tintList[i], baseList[i], shadeList[i]];
  };
  return colorObj;
};


function createPaletteTable() {
  const div = document.getElementById('debug');
  console.log(div);

  if (div !== null) {
    const mainColors = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow', 'white'];
    const headers = ['Tint', 'Base', 'Shade'];
    const baseColors = createColorVariant(mainColors, 'base');
    const lightColors = createColorVariant(mainColors, 'tint');
    const darkColors = createColorVariant(mainColors, 'shade');
    
    const colors = orderColorList(mainColors, lightColors, baseColors, darkColors);
    console.log(colors);
    const table = document.createElement('table');
    const row = document.createElement('tr');
    createTableHeaders(headers, row);
    table.appendChild(row);
    
    for (const color in colors) {

      const colorRow = document.createElement('tr');

      colors[color].forEach(function(variation) {
        const td = document.createElement('td');
        const text = document.createTextNode(variation);
        td.appendChild(text);
        td.classList.add(`bg-${variation}`);
        colorRow.appendChild(td);
      });
      table.appendChild(colorRow);
    };
    
    div.appendChild(table);
  };
};