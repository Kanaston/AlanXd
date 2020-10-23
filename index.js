const infoTable = document.querySelector("#infoTable");

// Tabla perrona

const infoData = {
  MARCA: { ASUS: 8, MSI: 10, GIGABYTE: 8, EVGA: 9, ZOTAC: 7 },
  MODELO: {
    "RX 5600XT": 8,
    "RTX 2060 SUPER": 9,
    "GTX 1660 SUPER": 8,
    "RX 5700XT": 9,
    "GTX 1660 TI": 8,
    "RTX 2080 TI": 9,
    "GTX 1650 SUPER": 7,
    "RX 5500XT": 7,
    "GTX 1080": 8,
    "RTX 3080": 10,
  },
  PRECIO: {
    "4000-6000": 10,
    "6000-8000": 9,
    "8000-11000": 8,
    "11000-16000": 7,
    "16000-20000": 6,
    "20000+": 5,
  },
  FRECUENCIA: {
    "1300-1500": 8,
    "1500-1600": 9,
    "1600+": 10,
  },
  VENTILADORES: {
    1: 6,
    2: 8,
    3: 10,
  },
  NUCLEOS: {
    "1200-1500": 4,
    "1500-2000": 5,
    "2000-2500": 6,
    "2500-3000": 7,
    "3000-4000": 8,
    "4000-6000": 9,
    "6000+": 10,
  },
  CONSUMO: {
    "100-150": 10,
    "150-200": 9,
    "200-250": 7,
    "250-300": 6,
    "300+": 4,
  },
  ARQUITECTURA: { RDNA: 9, "RT Y DLSS": 10, "NVIDIA TURING": 9 },
  VRAM: { 4: 5, 6: 6, 8: 7, 10: 9, "11+": 10 },
  "TIPO DE MEMORIA": { GGDR5: 7, GDDR5X: 8, GDDR6: 9, GDDR6X: 10 },
};

const initInfoTable = () => {
  /* Get max att of data */
  let maxRows = 0;
  Object.keys(infoData).forEach((data) => {
    const dataLen = Object.keys(infoData[data]).length;
    maxRows = dataLen > maxRows ? dataLen : maxRows;
  });

  for (let i = 0; i < maxRows; i++) {
    var row = infoTable.insertRow(-1);
    for (let j = 0; j < infoTable.rows[0].cells.length; j++) {
      var cell = row.insertCell(j);
    }
  }

  let cellIndex = 0;
  let rowIndex = 1;
  Object.keys(infoData).forEach((data) => {
    Object.keys(infoData[data]).forEach((element) => {
      let elementData = infoData[data][element];
      infoTable.rows[rowIndex].cells[cellIndex].innerHTML = element;
      infoTable.rows[rowIndex].cells[cellIndex + 1].innerHTML = elementData;
      rowIndex++;
    });
    rowIndex = 1;
    cellIndex += 2;
  });
};

var objStr =
  '{"Enca":[{"Columna":0,"Nombre":"MARCA"},{"Columna":1,"Nombre":"MODELO"},{"Columna":2,"Nombre":"PRECIO"},{"Columna":3,"Nombre":"FRECUENCIA"},{"Columna":4,"Nombre":"VENTILADORES"},{"Columna":5,"Nombre":"NUCLEOS"},{"Columna":6,"Nombre":"CONSUMO"},{"Columna":7,"Nombre":"ARQUITECTURA"},{"Columna":8,"Nombre":"VRAM"},{"Columna":9,"Nombre":"TIPO DE MEMORIA"}],"Datos":[{"Renglon":0,"Columna":0,"Dato":"ASUS"},{"Renglon":0,"Columna":1,"Dato":"RX 5600XT"},{"Renglon":0,"Columna":2,"Dato":"8799"},{"Renglon":0,"Columna":3,"Dato":"1375 MHz"},{"Renglon":0,"Columna":4,"Dato":"3"},{"Renglon":0,"Columna":5,"Dato":"2304"},{"Renglon":0,"Columna":6,"Dato":"150 W"},{"Renglon":0,"Columna":7,"Dato":"RDNA"},{"Renglon":0,"Columna":8,"Dato":"6"},{"Renglon":0,"Columna":9,"Dato":"GDDR6"},{"Renglon":1,"Columna":0,"Dato":"ASUS"},{"Renglon":1,"Columna":1,"Dato":"RTX 2060 SUPER"},{"Renglon":1,"Columna":2,"Dato":"12399"},{"Renglon":1,"Columna":3,"Dato":"1470 MHz"},{"Renglon":1,"Columna":4,"Dato":"3"},{"Renglon":1,"Columna":5,"Dato":"2176 CUDA"},{"Renglon":1,"Columna":6,"Dato":"175 W"},{"Renglon":1,"Columna":7,"Dato":"RT Y DLSS"},{"Renglon":1,"Columna":8,"Dato":"8"},{"Renglon":1,"Columna":9,"Dato":"GDDR6"},{"Renglon":2,"Columna":0,"Dato":"MSI"},{"Renglon":2,"Columna":1,"Dato":"GTX 1660 SUPER"},{"Renglon":2,"Columna":2,"Dato":"6999"},{"Renglon":2,"Columna":3,"Dato":"1830 MHz"},{"Renglon":2,"Columna":4,"Dato":"2"},{"Renglon":2,"Columna":5,"Dato":"1408 CUDA"},{"Renglon":2,"Columna":6,"Dato":"125 W"},{"Renglon":2,"Columna":7,"Dato":"NVIDIA TURING"},{"Renglon":2,"Columna":8,"Dato":"6"},{"Renglon":2,"Columna":9,"Dato":"GDDR6"},{"Renglon":3,"Columna":0,"Dato":"MSI"},{"Renglon":3,"Columna":1,"Dato":"RX 5700xt"},{"Renglon":3,"Columna":2,"Dato":"10599"},{"Renglon":3,"Columna":3,"Dato":"1670 MHz"},{"Renglon":3,"Columna":4,"Dato":"2"},{"Renglon":3,"Columna":5,"Dato":"2560"},{"Renglon":3,"Columna":6,"Dato":"225 W"},{"Renglon":3,"Columna":7,"Dato":"RDNA"},{"Renglon":3,"Columna":8,"Dato":"8"},{"Renglon":3,"Columna":9,"Dato":"GDDR6"},{"Renglon":4,"Columna":0,"Dato":"GIGABYTE"},{"Renglon":4,"Columna":1,"Dato":"GTX 1660 Ti"},{"Renglon":4,"Columna":2,"Dato":"8399"},{"Renglon":4,"Columna":3,"Dato":"1800 MHz"},{"Renglon":4,"Columna":4,"Dato":"2"},{"Renglon":4,"Columna":5,"Dato":"1536 CUDA"},{"Renglon":4,"Columna":6,"Dato":"150 W"},{"Renglon":4,"Columna":7,"Dato":"NVIDIA TURING"},{"Renglon":4,"Columna":8,"Dato":"6"},{"Renglon":4,"Columna":9,"Dato":"GDDR6"},{"Renglon":5,"Columna":0,"Dato":"GIGABYTE"},{"Renglon":5,"Columna":1,"Dato":"RTX 2080 Ti"},{"Renglon":5,"Columna":2,"Dato":"28299"},{"Renglon":5,"Columna":3,"Dato":"1650 MHz"},{"Renglon":5,"Columna":4,"Dato":"3"},{"Renglon":5,"Columna":5,"Dato":"4352 CUDA"},{"Renglon":5,"Columna":6,"Dato":"250 W"},{"Renglon":5,"Columna":7,"Dato":"RT Y DLSS"},{"Renglon":5,"Columna":8,"Dato":"11"},{"Renglon":5,"Columna":9,"Dato":"GDDR6"},{"Renglon":6,"Columna":0,"Dato":"EVGA"},{"Renglon":6,"Columna":1,"Dato":"GTX 1650 SUPER"},{"Renglon":6,"Columna":2,"Dato":"4999"},{"Renglon":6,"Columna":3,"Dato":"1755 MHz"},{"Renglon":6,"Columna":4,"Dato":"2"},{"Renglon":6,"Columna":5,"Dato":"1280 CUDA"},{"Renglon":6,"Columna":6,"Dato":"100 W"},{"Renglon":6,"Columna":7,"Dato":"NVIDIA TURING"},{"Renglon":6,"Columna":8,"Dato":"4"},{"Renglon":6,"Columna":9,"Dato":"GDDR6"},{"Renglon":7,"Columna":0,"Dato":"MSI"},{"Renglon":7,"Columna":1,"Dato":"RX 5500XT"},{"Renglon":7,"Columna":2,"Dato":"4919"},{"Renglon":7,"Columna":3,"Dato":"1647 MHz"},{"Renglon":7,"Columna":4,"Dato":"2"},{"Renglon":7,"Columna":5,"Dato":"1408"},{"Renglon":7,"Columna":6,"Dato":"130 W"},{"Renglon":7,"Columna":7,"Dato":"RDNA"},{"Renglon":7,"Columna":8,"Dato":"8"},{"Renglon":7,"Columna":9,"Dato":"GDDR6"},{"Renglon":8,"Columna":0,"Dato":"GIGABYTE"},{"Renglon":8,"Columna":1,"Dato":"GTX 1080"},{"Renglon":8,"Columna":2,"Dato":"19979"},{"Renglon":8,"Columna":3,"Dato":"1657 MHz"},{"Renglon":8,"Columna":4,"Dato":"3"},{"Renglon":8,"Columna":5,"Dato":"2560 CUDA"},{"Renglon":8,"Columna":6,"Dato":"180 W"},{"Renglon":8,"Columna":7,"Dato":"NVIDIA TURING"},{"Renglon":8,"Columna":8,"Dato":"8"},{"Renglon":8,"Columna":9,"Dato":"GDDR5X"},{"Renglon":9,"Columna":0,"Dato":"ZOTAC"},{"Renglon":9,"Columna":1,"Dato":"RTX 3080"},{"Renglon":9,"Columna":2,"Dato":"19999"},{"Renglon":9,"Columna":3,"Dato":"1710 MHz"},{"Renglon":9,"Columna":4,"Dato":"3"},{"Renglon":9,"Columna":5,"Dato":"8704 CUDA"},{"Renglon":9,"Columna":6,"Dato":"320 W"},{"Renglon":9,"Columna":7,"Dato":"RT Y DLSS"},{"Renglon":9,"Columna":8,"Dato":"10"},{"Renglon":9,"Columna":9,"Dato":"GDDR6X"}]}';
var objTable = JSON.parse(objStr);

// Tabla chafa

var tablaPerrona = $("#tbl");

function fn_table_head() {
  var trEnca = $("<tr />").addClass("xd");
  $.each(objTable.Enca, (key, a) => {
    td = $("<td />").append(a.Nombre);
    trEnca.append(td);
  });
  tablaPerrona.append(trEnca);
}

function fn_table_body() {
  for (x = 0; x <= 9; x++) {
    var tr = $("<tr />");
    $.each(
      Enumerable.from(objTable.Datos)
        .where((foo) => {
          return parseInt(foo.Renglon) == x;
        })
        .toArray(),
      function (key, a) {
        td = $("<td />").append(a.Dato);
        tr.append(td);
      }
    );
    tablaPerrona.append(tr);
  }
}

var tablaFinal = $("#tbF");

function fn_table_head_F() {
  var trEnca = $("<tr />").addClass("xd");
  $.each(objTable.Enca, (key, a) => {
    td = $("<td />").append(a.Nombre);
    trEnca.append(td);
  });
  tablaFinal.append(trEnca);
}

const calculateInterval = (interval, value) => {
  if (interval.contains("-")) {
    const values = interval.split("-");
    if (value >= values[0] && value <= values[1]) {
      return interval;
    }
  } else if (interval.contains("+")) {
  }
  return false;
};

function fn_table_body_F() {
  for (x = 0; x <= 9; x++) {
    var tr = $("<tr />");
    $.each(
      Enumerable.from(objTable.Datos)
        .where((foo) => {
          return parseInt(foo.Renglon) == x;
        })
        .toArray(),
      (key, a) => {
        Object.keys(infoData).forEach((data, index) => {
          if (a.Columna === index) {
            if (typeof a.Dato === "string") {
              Object.keys(infoData[data]).forEach((ndata,index) => {  
                if(infoData[data][ndata]){
                  
                }
              });
              td = $("<td />").append(infoData[data][a.Dato.toUpperCase()]);
            } else {
              td = $("<td />").append(infoData[data][a.Dato]);
            }
            tr.append(td);
          }
        });
      }
    );
    tablaFinal.append(tr);
  }
}

initInfoTable();
fn_table_head();
fn_table_body();
fn_table_head_F();
fn_table_body_F();
// Add some text to the new cells:
