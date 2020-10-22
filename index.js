const infoTable = document.querySelector('#infoTable')

const infoData = {
  mark: { ASUS: 8, MSI: 10, GIGABYTE: 8, EVGA: 9, ZOTAC: 7 },
  model: {
    "RX-5600-XT": 8,
    "RTX-2060-SUPER": 9,
    "GTX-1660-SUPER": 8,
    "RX-5700-XT": 9,
    "GTX-1660-TI": 8,
    "RTX-2080-TI": 9,
    "GTX-1650-SUPER": 7,
    "RX-5500-XT": 7,
    "GTX-1080": 8,
    "RTX-3080": 10,
  },
  price: {
    "4000-6000": 10,
    "6000-8000": 9,
    "8000-11000": 8,
    "11000-16000": 7,
    "16000-20000": 6,
    "20000+": 5,
  },
  frecuency: {
    "1300-1500": 8,
    "1500-1600": 9,
    "1600+": 10,
  },
  fans: {
    1: 6,
    2: 8,
    3: 10,
  },
  cores: {
    "1200-1500": 4,
    "1500-2000": 5,
    "2000-2500": 6,
    "2500-3000": 7,
    "3000-4000": 8,
    "4000-6000": 9,
    "6000+": 10,
  },
  cons: {
    "100-150": 10,
    "150-200": 9,
    "200-250": 7,
    "250-300": 6,
    "300+": 4,
  },
  arq: { RDNA: 9, "RT-DLSS": 10, "NVIDIA-TURING": 9 },
  vram: { 4: 5, 6: 6, 8: 7, 10: 9, "11+": 10 },
  memType: { GGDR5: 7, GDDR5X: 8, GDDR6: 9, GDDR6X: 10 },
};
const initInfoTable = () => {
  /* Get max att of data */
  let maxRows = 0;
  Object.keys(infoData).forEach((data) => {
    const dataLen = Object.keys(infoData[data]).length;
    maxRows = dataLen > maxRows ? dataLen : maxRows;
  });

  for(let i=0;i<maxRows;i++){
    var row = infoTable.insertRow(-1);
    for(let j=0;j<infoTable.rows[0].cells.length;j++){
        var cell = row.insertCell(j);
    }
  }

  let cellIndex = 0;
  let rowIndex = 1;
  Object.keys(infoData).forEach((data) => {
    
    Object.keys(infoData[data]).forEach((element) => {
      let elementData = infoData[data][element];
        infoTable.rows[rowIndex].cells[cellIndex].innerHTML = element
        infoTable.rows[rowIndex].cells[cellIndex+1].innerHTML = elementData
        rowIndex++
    });
    rowIndex=1;
    cellIndex+=2
  });
};
initInfoTable();
// Add some text to the new cells:
